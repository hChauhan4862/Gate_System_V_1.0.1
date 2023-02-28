let save = () => {
  let DB_PROVIDER = document.getElementById("DB_PROVIDER").value;
  let DB_HOST = document.getElementById("DB_HOST").value;
  let DB_PORT = document.getElementById("DB_PORT").value;
  let DB_USER = document.getElementById("DB_USER").value;
  let DB_PASSWORD = document.getElementById("DB_PASSWORD").value;
  let DB_NAME = document.getElementById("DB_NAME").value;
  let SERVER_HOST_TYPE = document.getElementById("SERVER_HOST_TYPE").value;
  let SERVER_PORT = document.getElementById("SERVER_PORT").value;
  let APP_PASSWORD = document.getElementById("APP_PASSWORD").value;

  const data = {
    DB_PROVIDER: DB_PROVIDER,
    DB_HOST: DB_HOST,
    DB_PORT: DB_PORT,
    DB_USER: DB_USER,
    DB_PASSWORD: DB_PASSWORD,
    DB_NAME: DB_NAME,
    SERVER_HOST_TYPE: SERVER_HOST_TYPE,
    SERVER_PORT: SERVER_PORT,
    APP_PASSWORD: APP_PASSWORD,
  };

  // console.log(data);
  try {
    window.electronAPI.saveConfig(data);
    return;
  } catch (error) {
    return;
  }
};

function loadConfig() {
  let a = window.electronAPI2.configData;
  if (typeof a === "undefined" || a === null) {
    setTimeout(loadConfig, 1000);
  } else {
    a = a.data;
    console.log(a);
    document.getElementById("DB_PROVIDER").value = a.DB_PROVIDER;
    document.getElementById("DB_HOST").value = a.DB_HOST;
    document.getElementById("DB_PORT").value = a.DB_PORT;
    document.getElementById("DB_USER").value = a.DB_USER;
    document.getElementById("DB_PASSWORD").value = a.DB_PASSWORD;
    document.getElementById("DB_NAME").value = a.DB_NAME;
    document.getElementById("SERVER_HOST_TYPE").value = a.SERVER_HOST_TYPE;
    document.getElementById("SERVER_PORT").value = a.SERVER_PORT;
    document.getElementById("APP_PASSWORD").value = a.APP_PASSWORD;
  }
}

setTimeout(loadConfig, 1000);


let cancle = () => {
  window.close();
};
