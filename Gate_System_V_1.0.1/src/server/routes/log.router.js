const express = require('express');
const router = express.Router();
const {logController} = require('../controllers/index');


router.post('/addLog', logController.addLog);
router.get('/getAllLogs', logController.getAllLogs);
// this will be query string
router.post('/reportCalculation', logController.reportCalculation);



module.exports = router;