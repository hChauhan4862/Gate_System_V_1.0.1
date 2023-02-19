const { contextBridge, ipcRenderer } = require('electron')


ipcRenderer.on('message-from-main', (event, data) => {
    contextBridge.exposeInMainWorld('electronAPI2', {
        configData: data
    });
});

// Expose the `saveConfig` 
contextBridge.exposeInMainWorld('electronAPI', {
    saveConfig: (data) => {
        ipcRenderer.send('saveUserConfig', data)
    }
});

