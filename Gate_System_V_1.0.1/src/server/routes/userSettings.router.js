const express = require('express');
const router = express.Router();

const {userSettingsController} = require('../controllers/index');

router.put('/editTheme/:id', userSettingsController.editTheme);

module.exports = router;