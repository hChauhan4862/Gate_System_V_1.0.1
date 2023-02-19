const express = require('express');
const router = express.Router();
const fileUpload = require("express-fileupload");


const organizationRouter = require('./organization.router');
const orgGroupRouter = require('./orgGroup.router');
const userRouter = require('./user.router');
const userGroupRouter = require('./userGroup.router');
const permissionRouter = require('./permission.router');
const doorsRouter = require('./doors.router');
// const devicesRouter = require('./devices.router');
const deviceTypeRouter = require('./device_type.router');
const deviceLogRouter = require('./device_log.router');
const commandsRouter = require('./commands.router');
const rfidRouter = require('./rfid_card.router');
// const portsRouter = require('./ports.router');
const devicesSetupRouter = require('./deviceSetup.router');
const studentsRouter = require('./students.routes');
const staticRouter = require('./staticRouting.router');
const logRouter = require('./log.router')
const { app } = require('electron');


router.use(fileUpload())

router.use('/organization', organizationRouter);
router.use('/orgGroup', orgGroupRouter);
router.use('/user', userRouter);
router.use('/userGroup', userGroupRouter);
router.use('/permission', permissionRouter);
router.use('/doors', doorsRouter);
// router.use('/devices', devicesRouter);
router.use('/deviceType', deviceTypeRouter);
router.use('/deviceLog', deviceLogRouter);
router.use('/commands', commandsRouter);
router.use('/rfid', rfidRouter);
// router.use('/ports', portsRouter);
router.use('/devicesSetup', devicesSetupRouter);
router.use('/students', studentsRouter);
router.use('/log',logRouter)





router.use('/', staticRouter);


module.exports = router;