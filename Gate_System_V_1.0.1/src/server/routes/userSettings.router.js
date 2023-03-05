const express = require('express');
const router = express.Router();

const {userSettingsController} = require('../controllers/index');

router.put('/editTheme/:id', userSettingsController.editTheme);
router.put('/editSettings/:id', userSettingsController.editSettings);

module.exports = router;