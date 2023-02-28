const { app, ipcMain, dialog } = require("electron");
const wnConfig = require("../storage");

let configIPCHandler = null;

ipcMain.on("saveUserConfig", async (event, data) => {
  console.log("saveUserConfig", data);

  if (data.DB_PROVIDER != "SQLITE") {
    if (data.DB_HOST == "" || data.DB_PORT == "" || data.DB_USER == "" || data.DB_NAME == "") {
      dialog.showMessageBoxSync({ type: "error", title: "Error", message: "Please fill all the database fields", });
      return;
    }
  }

  let DB_URL = "";
  if (data.DB_PROVIDER == "SQLITE") {
    // ****************************** SQLITE ****************************** //
    DB_URL = `file:${app.getPath("userData") + "/wn_bd.dll"}`;
    DB_OBJ = { datasources: { db: { url: DB_URL } } };
    const { PrismaClient } = require("../../../prisma/generated/sqlite-client");
    try {
      prisma = new PrismaClient(DB_OBJ);
      await prisma.$connect();
    } catch (error) {
      dialog.showMessageBoxSync({ type: "error", title: "Error", message: "Error connecting to database", });
      return;
    }
  }
  if (data.DB_PROVIDER == "MYSQL") {
    // ****************************** MYSQL ****************************** 
    const createDatabaseIfNotExistsAndMigrate = require("../../../prisma/migrators/mysql");
    let isSuccessful = await createDatabaseIfNotExistsAndMigrate(data.DB_HOST, data.DB_USER, data.DB_PASSWORD, data.DB_NAME);
    if (!isSuccessful) {
      dialog.showMessageBoxSync({ type: "error", title: "Error", message: "Error connecting to database", });
      return;
    }
  }

  for (let key in data) {
    wnConfig(key, data[key]);
  }

  // reload the app
  app.relaunch();
  app.exit();
});
// webContents.send('message-from-main', { data: 'Hello from the main process!' });

module.exports = configIPCHandler;