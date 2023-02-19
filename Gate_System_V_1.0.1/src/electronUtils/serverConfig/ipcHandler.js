const { app, ipcMain, dialog } = require("electron");
const wnConfig = require("../storage");
const mysql = require("mysql");

let configIPCHandler = null;

ipcMain.on("saveUserConfig", async (event, data) => {
  console.log("saveUserConfig", data);

  if (data.DB_PROVIDER != "SQLITE") {
    if (
      data.DB_HOST == "" ||
      data.DB_PORT == "" ||
      data.DB_USER == "" ||
      data.DB_NAME == ""
    ) {
      dialog.showMessageBoxSync({
        type: "error",
        title: "Error",
        message: "Please fill all the database fields",
      });
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
      dialog.showMessageBoxSync({
        type: "error",
        title: "Error",
        message: "Error connecting to database",
      });
      return;
    }
  }
  if (data.DB_PROVIDER == "MYSQL") {
    // ****************************** MYSQL ****************************** //  mysql://root:@localhost:3306/gate_system_v_1.0.0
    try {
        // connect to the database using mysql
        const connection = await mysql.createConnection({
          host: data.DB_HOST,
          port: data.DB_PORT,
          user: data.DB_USER,
          password: data.DB_PASSWORD,
        });
      
        // connect to the database
        connection.connect((err) => {
          if (err) {
            console.error('Error connecting to database:', err.stack);
            return;
          }
          console.log('Connected to database as id', connection.threadId);
        });
      
        // create the database if it does not exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${data.DB_NAME}`);
      
        // close the connection
        connection.end((err) => {
          if (err) {
            console.error('Error closing database connection:', err.stack);
            dialog.showMessageBoxSync({
                type: "error",
                title: "Error",
                message: "Error connecting to database" + err.stack,
              });
            return;
          }
          console.log('Database connection closed.');
        });
      
      } catch (error) {
        dialog.showMessageBoxSync({
          type: 'error',
          title: 'Error',
          message: 'Error connecting to database',
        });
        return;
      }
  }

  for (let key in data) {
    // if key == "SERVER_PORT" then convert to int AND check if it is a valid port number
    wnConfig(key, data[key]);
  }

  // reload the app
  app.relaunch();
  app.exit();
});
// webContents.send('message-from-main', { data: 'Hello from the main process!' });

module.exports = configIPCHandler;
