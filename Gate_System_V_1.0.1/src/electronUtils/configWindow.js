const { BrowserWindow } = require("electron");
const wnConfig = require("./storage");

const path = require("path");

let ConfigWindow = null;

let createConfigWindow = () => {
  if (ConfigWindow) {
    ConfigWindow.focus();
    return;
  }
  ConfigWindow = new BrowserWindow({
    width: 500,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // enable dev tools
      devTools: true,
      preload: path.join(__dirname, "serverConfig", "preload.js"),
    },
    // autoHideMenuBar: true,
    // resizable: false,
    frame: true,
  });
  ConfigWindow.loadFile(path.join(__dirname, "serverConfig", "config.html"));
  ConfigWindow.setIcon(path.join(__dirname, "../icon/icon.ico"));
  ConfigWindow.setTitle("Wise Gate Application Configuration");
  ConfigWindow.webContents.send("message-from-main", { data: wnConfig() });
  //  open dev tools
  // ConfigWindow.webContents.openDevTools();

  ConfigWindow.on("closed", () => {
    ConfigWindow = null;
  });
};


module.exports = createConfigWindow