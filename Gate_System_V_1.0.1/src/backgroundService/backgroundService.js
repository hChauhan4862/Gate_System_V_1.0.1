const axios = require("axios");
const wnConfig = require("../electronUtils/storage");
const { SerialPort } = require("serialport");
const path = require("path");

const PORT = wnConfig("SERVER_PORT") || process.env.PORT;
var serialHandlers = []; // [{"path":connection}]
var registedPorts = []; // ["COM1","COM2"]
var db_data = []; // [{"id":1,"com_id":"","DevicePath":"COM4","gate_id":1,"device_type":"READ_IN"},{"id":2,"com_id":"","DevicePath":"COM5","gate_id":1,"device_type":"WRITE"}]

endpoint = `http:/127.0.0.1:${PORT}/`;

function commandString(command) {
  const inputString = command;
  let outputBuffer = Buffer.alloc(inputString.length);
  for (let i = 0; i < inputString.length; i++) {
    outputBuffer[i] = inputString.charCodeAt(i);
  }
  const startBuffer = Buffer.from([0x02]);
  const endBuffer = Buffer.from([0x03]);
  const finalBuffer = Buffer.concat([startBuffer, outputBuffer, endBuffer]);
  const outputString = finalBuffer.toString("hex").replace(/(\w{2})/g, "\\x$1");
  // console.log(outputString);
  return outputString;
}

function getSerialPorts() {
  const temp = [];
  SerialPort.list().then((ports) => {
    ports.forEach((port) => {
      if (!temp.includes(port.path)) {
        temp.push(port.path);
        // console.log(temp, "port.path");
      }
    });
    registedPorts = temp;
  });
}
setInterval(() => {
  getSerialPorts();
}, 1000);

const { getTheDataFromDB } = require("./dbPort");
getTheDataFromDB();

setInterval(() => {
  const { db_get_ports } = require("./dbPort");
  if (!checkEqual(registedPorts, db_get_ports)) {
    getTheDataFromDB();
  }
}, 2000);

// function to check both arrays are equal or not
const checkEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((value, index) => value === array2[index]);
};

async function connectSerial(d) {
  // console.log(d.path, "d");
  // console.log(d)
  var serialport = new SerialPort({
    path: d.path,
    baudRate: 9600,
    autoOpen: true,
  }).setEncoding("utf8");
  serialport.on("error", function (e) {
    setTimeout(() => {
      connectSerial(d);
    }, 500);
  });
  serialport.on("open", () => {
    console.log("Opened");
    serialHandlers.push({
      path: d.path,
      door_name: d.door_name,
      devices_type_opration: d.devices_type_opration,
      serial: serialport,
    });
  });
  serialport.on("close", function () {
    console.log("Port Closed");
    // UnRegister Handler
    for (i = 0; i < db_data.length; i++) {
      if (db_data[i].path == d.path) {
        serialHandlers.splice(i, 1);
        break;
      }
    }
    // End UnRegister Handler
    setTimeout(() => {
      connectSerial(d);
    }, 500);
  });

  serialport.on("readable", () => {
    setTimeout(async () => {
      readerPort = serialport.path;
      // console.log(readerPort, "serialport.path")
      data = serialport.read();
      if (data) {
        output = data
          .toString()
          .replace(/[\x02]/g, "")
          .toString()
          .replace(/[\x03]/g, "");

        //   Send Data to Server for Validation
        // let temp = await axios.post(endpoint + "devicesSetup/validateInput", { port: readerPort, data: output });
        // console.log(temp.data, "temp.data");
        // {"status":true,actions:[{"action":"write",path:"COM4","data":"1234567890"}]
        // if (temp.data.status) and temp.data.actions[0].action === "write"
        // serialHandlers[temp.data.actions[path]].write(commandString(temp.data.actions[data]));
        


      }
    }, 50);
  });
}
