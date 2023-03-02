const { BrowserWindow } = require('electron');
const wnConfig = require('./storage');

const path = require('path');

let mainWindow;
let PORT = wnConfig("SERVER_PORT") || process.env.PORT;

const createWindow = () => {
    // check if window is already created
    if (mainWindow) {
        // if window is already created, then focus on it
        mainWindow.focus();
        return mainWindow;
    }
    mainWindow = new BrowserWindow(
        {
            width: 765, 
            height: 600,
        }
    );
    mainWindow.loadURL(`http://localhost:${PORT}/`);
    mainWindow.setMenu(null)
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    // set icon
    mainWindow.setIcon(path.join(__dirname, '../icon/icon.ico'));
    // set title
    mainWindow.setTitle('Wise Gate Application');
    // mainWindow.webContents.openDevTools();
};


module.exports = {
    createWindow,
    mainWindow
}
