const {app} = require('electron')
const crypto = require('crypto');
const fs = require('fs');

CONFIG_DIR = app.getPath('userData') + '/wnc.dll';
LEGAL_KEYS_VALUES = {
    "APP_PASSWORD" : "",
    "DB_PROVIDER" : "MYSQL",
    "DB_HOST" : "",
    "DB_USER" : "",
    "DB_PASSWORD" : "",
    "DB_NAME" : "",
    "DB_PORT" : "",
    "DATABASE_URL" : "",
    "SERVER_HOST_TYPE" : "myNetwork",
    "SERVER_HOST" : "",
    "SERVER_PORT" : "8082",
}

const SECRET_KEY = 'DV8d9Cjf1FWJEYOvp0VXvLTkQbCXP7DV';

if (!fs.existsSync(CONFIG_DIR)) {
    fs.writeFileSync(CONFIG_DIR, '');
}

const wnConfig = (k,v) => {
    if (k && !(k in LEGAL_KEYS_VALUES)) {
        return null;
    }
    let config = {};
    try{
        let text = fs.readFileSync(CONFIG_DIR);
        text = text.toString().split(':');
        let iv = Buffer.from(text[0], 'hex');
        let encryptedText = Buffer.from(text[1], 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(SECRET_KEY), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        let FINAL = decrypted.toString();
        config = JSON.parse(FINAL);
    } catch (error) {
        // console.log(error);
    }

    if(!k){
        return config;
    }
    // check if v is null or undefined
    if ((typeof v === 'undefined' || v === null)) {
        try {
            return config[k] || null;
        } catch (error) {
            return null;
        }
    }

    config[k] = v;

    text = JSON.stringify(config);

    iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(SECRET_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    encrypted = iv.toString('hex')+':'+encrypted.toString('hex');
    fs.writeFileSync(CONFIG_DIR, encrypted);
    return v
}


// Check all keys are in the config file and add them if not there
for (const key in LEGAL_KEYS_VALUES) {
    if (wnConfig(key) == null) {
        wnConfig(key, LEGAL_KEYS_VALUES[key]);
    }
}

module.exports = wnConfig;