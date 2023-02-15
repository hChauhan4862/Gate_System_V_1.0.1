const axios = require("axios");
const wnConfig = require('../electronUtils/storage');
const { SerialPort } = require("serialport");
const path = require("path");

let HOST = wnConfig("SERVER_HOST") || process.env.HOST;
const PORT = wnConfig("SERVER_PORT") || process.env.PORT;
var serialHandlers = []; // [{"path":connection}]
var registedPorts = []; // ["COM1","COM2"]
var db_get_ports = []; // ["COM1","COM2"]
var db_data = []; // [{"id":1,"com_id":"","DevicePath":"COM4","gate_id":1,"device_type":"READ_IN"},{"id":2,"com_id":"","DevicePath":"COM5","gate_id":1,"device_type":"WRITE"}]
var ConnectedPorts = [];
HOST = "localhost";

endpoint = `http://${HOST}:${PORT}/`;
console.log("Wise Gate Application 3");

// commands
// ::C31 Emergency Exit Mode
// ::C30 Normal Mode
// ::DI00 OPEN DOOR INSIDE
// ::DO00 OPEN DOOR OUTSIDE



// function commandString(command) {
//   const inputString = command;
//   let outputBuffer = Buffer.alloc(inputString.length);
//   for (let i = 0; i < inputString.length; i++) {
//     outputBuffer[i] = inputString.charCodeAt(i);
//   }
//   const startBuffer = Buffer.from([0x02]);
//   const endBuffer = Buffer.from([0x03]);
//   const finalBuffer = Buffer.concat([startBuffer, outputBuffer, endBuffer]);
//   const outputString = finalBuffer.toString("hex").replace(/(\w{2})/g, "\\x$1");
//   // console.log(outputString);
//   return outputString;
// }

// let b = commandString("C31");
// console.log(b);

// get serial ports from system
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


// Interval set for get api call
setInterval(() => {
  // console.log(registedPorts, "registedPorts---------------------------------------------");
  // console.log(db_get_ports, "db_get_ports============================================");
  if (!checkEqual(registedPorts, db_get_ports))getTheDataFromDB();
} , 2000);

// getTheDataFromDB
function getTheDataFromDB() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios.get(endpoint + "devicesSetup/getAllDevices", config)
    .then((res) => {

      // if res.data.devices_type_opration === 'ISSUE - READER' remove the device from the array
      const filterdList = res.data.filter((item) => {
        return item.devices_type_opration !== 'ISSUE - READER'
      })
        db_data = filterdList;
        // console.log(db_data, "db_data");
      const temp = [];
      db_data.map((item) => {
        // console.log(item.path, "item")
        if(!temp.includes(item.path)){
        temp.push(item.path);
        setTimeout(() => {
          connectSerial(item);
        }, 1);
        }
      });
      db_get_ports = temp;
      
    })
    .catch((err) => {
      console.log(err);
    });
}
getTheDataFromDB();


// function to check both arrays are equal or not
const checkEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((value, index) => value === array2[index]);
}



  
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
    serialHandlers.push({ path: d.path, door_name:d.door_name,  devices_type_opration: d.devices_type_opration, serial:serialport});
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
      data = serialport.read();
      if (data) {
        output = data
          .toString()
          .replace(/[\x02]/g, "")
          .toString()
          .replace(/[\x03]/g, "");
        console.log(output);
        door_name = d.door_name;
          let studentName = ''
          let cardStatus = ''
          let studentStatus = ''
          await checkCardNo(output).then((res) => {
            // console.log(res, "res");
            if(res == null) return false
            studentName = res.name
            cardStatus = res.rfid_card.isActive
            studentStatus = res.isActive
          })
          // console.log(studentName, "studentName")
          // console.log(cardStatus, "cardStatus")
          // console.log(studentStatus, "studentStatus")
        // }
        if( cardStatus == '' || studentStatus == ''||  cardStatus == undefined || studentStatus == undefined || cardStatus == null || studentStatus == null) return;
        

         devices_type_opration = d.devices_type_opration;

        db_data.forEach((e) => {
          if (e.path == d.path) {
            devices_type_opration = e.devices_type_opration;
          }
        });

        // console.log(devices_type_opration,d)
        if (devices_type_opration != "READ - IN" && devices_type_opration != "READ - OUT") {
          console.log("Device not register as Reader");
          return;
        }
  //       if (!(await checkUser(output, d))) {
  //         console.log("User Not Validated");
  //         return;
  //       }

        gate_port = "";
        gate_serial = null;
        db_data.forEach(function (t) {
          // console.log(t, "888888888888888888888888888")
          // console.log(t.door_name, "jsjsjsj")
          // console.log(door_name, "1234")
          if (t.door_name == door_name && t.devices_type_opration == "WRITE") {
            gate_port = t.path;
            console.log(t.path, "888888888888888888888888888")
          }
        });

        // console.log(gate_port, "gate_port");
        // serialHandlers.forEach(function (t) {
          // if (t.path == gate_port) {
  //           gate_serial = t.serial;
  //         }
  //       });

  //       // console.log(serialHandlers)

  //       if (gate_serial == null) {
  //         console.warn("Gate Swing Not Connected");
  //         return;
  //       }

        var command =
        devices_type_opration == "READ - IN"
            ? "\x02\x44\x49\x30\x30\x03"
            : "\x02\x44\x4f\x30\x30\x03"; // DI00 : DO00

        console.log("Gate Opened");
        serialport.write(command);
        console.log(serialport.write(command))
      }
    }, 50);
  });
}


const checkCardNo = function checkCardNo(card_no){
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const a = axios
      .get(endpoint + "rfid/findByCardNo/" + card_no, config)
      .then((res) => {
      //  console.log(res.data)
        if(res.data){
          // studentName = res.data.name;
          return res.data
        }else{
          return false;
        }
      })
      .catch((err) => {
        // console.log(err);
        return false;
      }
      );

      return a

}