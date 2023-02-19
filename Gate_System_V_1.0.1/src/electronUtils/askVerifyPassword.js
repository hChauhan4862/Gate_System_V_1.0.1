const prompt = require('custom-electron-prompt');
const { dialog } = require('electron');
const path = require('path');
const wnConfig = require('./storage')

const verifyPassword = (callback) => {
    // check if callback is a valid function
    if (typeof callback !== 'function') {
        return
    }
    let configPass = wnConfig('APP_PASSWORD')
    // check if password is set
    if (configPass !== undefined && configPass && configPass !== '' && configPass !== null && configPass !== 'null') {
        // ask for password
        prompt({ 
            title: 'Enter Password', 
            label: 'Password:', 
            value: '', 
            inputAttrs: { type: 'password' }, type: 'input', alwaysOnTop: true, icon: path.join(__dirname, '../icon/icon.ico')},
        ).then((r) => {
            if (r !== null) {
                if (r === configPass) {
                    callback()
                } else {
                    dialog.showMessageBoxSync({
                        type: 'error',
                        title: 'Wise Gate Application',
                        message: 'Wrong password',
                        buttons: ['OK']
                    })
                }
            }
        }).catch(
            console.error
        );
    }
    else {
        callback()
    }
}

module.exports = verifyPassword