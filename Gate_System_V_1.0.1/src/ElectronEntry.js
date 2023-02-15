const { app, BrowserWindow, Tray, Menu, nativeImage, dialog } = require('electron');
const { createWindow,mainWindow } = require('./electronUtils/myWindow');
const createTray = require('./electronUtils/trayMenu');
const wnConfig = require('./electronUtils/storage');
const backgroundService = require('./backgroundService/backgroundServices');
const path = require('path');


app.whenReady().then(createTray).then(() => {
  createWindow();
})

app.on('activate', () => {
  console.log("Wise Gate Application 1")
  if (BrowserWindow.getAllWindows().length === 0) { createWindow(); }
  console.log("Wise Gate Application 2")
});

app.on('quit', () => {
  // server.close()
})

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {

  }
});


// Path: src\electronUtils\storage.js
// wnConfig("APP_PASSWORD", "123456")
// wnConfig("APP_MODE", "BOTH")
wnConfig("DB_PROVIDER", "MYSQL")
// wnConfig("DB_HOST", "localhost")
// wnConfig("DB_PORT", "3306")
// wnConfig("DB_USER", "root")
// wnConfig("DB_PASSWORD","")
// wnConfig("DB_NAME", "gate_system_v_1_0_1")
// wnConfig("DATABASE_URL", "mysql://gate_system_v_1_0_1:Wise123@141.148.200.98:3306/gate_system_v_1_0_1")
wnConfig("DATABASE_URL", "mysql://root:@localhost:3306/gate_system_v_1.0.0")
wnConfig("SERVER_HOST", "0.0.0.0")
wnConfig("SERVER_PORT", "8082")
console.log(wnConfig())




// Path: src\server\server.js
const expressServer = require('./server/server')

const HOST = wnConfig("SERVER_HOST") || process.env.HOST;
const PORT = wnConfig("SERVER_PORT") || process.env.PORT;

expressServer.listen(PORT, HOST, () => {
  let host = (HOST == "0.0.0.0") ? "localhost" : HOST;
  console.log(`server expressServer listening at http://${host}:${PORT}`)
})
