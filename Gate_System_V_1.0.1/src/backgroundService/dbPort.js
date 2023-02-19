const axios = require("axios");

let db_get_ports = [];

function getTheDataFromDB() {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(endpoint + "devicesSetup/getAllDevices", config)
    .then((res) => {
      // if res.data.devices_type_opration === 'ISSUE - READER' remove the device from the array
      const filterdList = res.data.filter((item) => {
        return item.devices_type_opration !== "ISSUE - READER";
      });
      db_data = filterdList;
      // console.log(db_data, "db_data");
      const temp = [];
      db_data.map((item) => {
        // console.log(item.path, "item")
        if (!temp.includes(item.path)) {
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


module.exports = {
    getTheDataFromDB,
    db_get_ports
}