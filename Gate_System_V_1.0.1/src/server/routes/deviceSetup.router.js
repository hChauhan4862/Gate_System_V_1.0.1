const express = require('express');
const router = express.Router();


const {devicesSetupController} = require('../controllers/index');



router.post('/addDevice', devicesSetupController.createDevice);
router.get('/getAllDevices', devicesSetupController.getAllDevices);
router.get('/getPorts', devicesSetupController.getPorts);
router.get('/getDeviceById/:id', devicesSetupController.getDeviceById);
router.put('/editDeviceById/:id', devicesSetupController.editDeviceById);
router.delete('/deleteDeviceById/:id', devicesSetupController.deleteDeviceById);
router.put('/mapDevice/:id', devicesSetupController.mapDevice);

module.exports = router;

