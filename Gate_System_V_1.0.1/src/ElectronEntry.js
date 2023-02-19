const {
  app,
  BrowserWindow,
  Tray,
  Menu,
  nativeImage,
  dialog,
} = require("electron");
const { createWindow, mainWindow } = require("./electronUtils/myWindow");
const createTray = require("./electronUtils/trayMenu");
const wnConfig = require("./electronUtils/storage");
const configIPCHandler = require("./electronUtils/serverConfig/ipcHandler");
const path = require("path");

app.on("quit", () => {
  // server.close()
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
  }
});

// Path: src\electronUtils\storage.js
// wnConfig("APP_PASSWORD", "")
// // wnConfig("APP_MODE", "BOTH")
// wnConfig("DB_PROVIDER", "MYSQL")
// // wnConfig("DB_PROVIDER", "SQLITE")
// // wnConfig("DB_HOST", "localhost")
// // wnConfig("DB_PORT", "3306")
// // wnConfig("DB_USER", "root")
// // wnConfig("DB_PASSWORD","")
// // wnConfig("DB_NAME", "gate_system_v_1_0_1")
// // wnConfig("DATABASE_URL", "mysql://gate_system_v_1_0_1:Wise123@141.148.200.98:3306/gate_system_v_1_0_1")
// wnConfig("DATABASE_URL", "mysql://root:@localhost:3306/gate_system_v_1.0.0")
// // wnConfig("DATABASE_URL", "file:/Users/database.sqlite")
// wnConfig("SERVER_HOST", "0.0.0.0")
// wnConfig("SERVER_PORT", "8082")
// console.log(wnConfig())

let CONFIG = wnConfig();
let isConfigSet = false;

if (
  CONFIG.DB_PROVIDER == "SQLITE" ||
  (CONFIG.DB_HOST != "" &&
    CONFIG.DB_PORT != "" &&
    CONFIG.DB_USER != "" &&
    CONFIG.DB_NAME != "")
) {
  isConfigSet = true;
}

if (isConfigSet) {
  console.log(
    "Wise Gate Application :::::::::::::::::::::::::::::::::::::::::::::",
    isConfigSet
  );
  app
    .whenReady()
    .then(createTray)
    .then(() => {
      createWindow();
    });

  app.on("activate", () => {
    console.log("Wise Gate Application 1");
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
    console.log("Wise Gate Application 2");
  });

  console.log(wnConfig());

  if (CONFIG.DB_PROVIDER == "MYSQL") {
    wnConfig(
      "DATABASE_URL",
      `mysql://${CONFIG.DB_USER}:${CONFIG.DB_PASSWORD}@${CONFIG.DB_HOST}:${CONFIG.DB_PORT}/${CONFIG.DB_NAME}`
    );
  } else if (CONFIG.DB_PROVIDER == "SQLITE") {
    wnConfig("DATABASE_URL", `file:${app.getPath("userData") + "/wn_bd.dll"}`);
  }

  if (CONFIG.SERVER_HOST_TYPE == "myNetwork") {
    //  get local ip address
    const os = require("os");
    const interfaces = os.networkInterfaces();
    let ipAddress;

    Object.keys(interfaces).forEach((interfaceName) => {
      interfaces[interfaceName].forEach((interfaceInfo) => {
        if (interfaceInfo.family === "IPv4" && !interfaceInfo.internal) {
          ipAddress = interfaceInfo.address;
        }
      });
    });
    wnConfig("SERVER_HOST", ipAddress);
  } else if (CONFIG.SERVER_HOST_TYPE == "myPC") {
    wnConfig("SERVER_HOST", "127.0.0.1");
  } else if (CONFIG.SERVER_HOST_TYPE == "public") {
    wnConfig("SERVER_HOST", "0.0.0.0");
  }

  // Path: src\server\server.js
  const expressServer = require("./server/server");

  const HOST = wnConfig("SERVER_HOST") || process.env.HOST;
  const PORT = wnConfig("SERVER_PORT") || process.env.PORT;

  expressServer.listen(PORT, HOST, () => {
    let host = HOST == "0.0.0.0" ? "localhost" : HOST;
    console.log(`server expressServer listening at http://${host}:${PORT}`);
  });

  const backgroundService = require("./backgroundService/backgroundServices");
} else {
  app.whenReady().then(() => {
    const createConfigWindow = require("./electronUtils/configWindow");
    createConfigWindow();
  });
}
