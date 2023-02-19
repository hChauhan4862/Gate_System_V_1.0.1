const { app, BrowserWindow, Tray, Menu, nativeImage, dialog } = require('electron');
const { createWindow, mainWindow } = require('./myWindow');
const createConfigWindow = require('./configWindow');
const path = require('path');
const verifyPassword = require('./askVerifyPassword');




const menuTemplate = [
    {
        label: 'Restart App',
        enabled: true,
        click: () => {
            verifyPassword(() => {
                sure = dialog.showMessageBoxSync({
                    type: 'question',
                    title: 'Wise Gate Application',
                    message: 'Are you sure you want to restart the application?\nGate Service may be interrupted during the restart process.',
                    buttons: ['Yes', 'No']
                })
                if (sure === 0) {
                    app.relaunch();
                    app.exit();
                }
            })
        }
    },
    {
        label: 'Configure',
        click: () => {
            verifyPassword(createConfigWindow)
        }
    },
    {
        label: 'About',
        click: () => {
            dialog.showMessageBox({
                type: 'info',
                title: 'Wise Gate Application',
                message: 'Gate Software for Wise Application\n CopyRight 2021 Wise Application\n Version 1.0.1'
            })
        }
    },
    {
        label: 'Exit',
        click: () => {
            verifyPassword(() => {
                app.quit()
            })
        }

    }
]

const createTray = () => {
    const iconPath = path.join(__dirname, '../icon/settings.png')
    const trayIcon = nativeImage.createFromPath(iconPath).resize({ width: 24, height: 24 })
    const tray = new Tray(trayIcon)
    tray.setToolTip('Wise Gate Application')
    tray.on('click', () => {
        createWindow()
    })
    const buildTrayMenu = menu => {
        const trayMenu = Menu.buildFromTemplate(menu)
        tray.setContextMenu(trayMenu)
    }
    buildTrayMenu(menuTemplate)
}

module.exports = createTray