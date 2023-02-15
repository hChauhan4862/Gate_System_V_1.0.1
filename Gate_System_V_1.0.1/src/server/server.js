const express = require('express');
const expressServer = express();
const path = require('path');
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

expressServer.use(express.json())
expressServer.use(express.urlencoded({ extended: true }))

expressServer.use(morgan('dev'))
expressServer.use(cors())

expressServer.use('/', router);

module.exports = expressServer;


// for kill port
//netstat -ano | findstr :<PORT>
//taskkill /PID <PID> /F