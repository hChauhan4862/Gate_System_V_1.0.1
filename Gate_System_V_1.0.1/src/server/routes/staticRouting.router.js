const express = require('express');
const router = express.Router();
const path = require('path');

const STATIC_PATH = path.join(__dirname, '../../frontend');

router.use(express.static(STATIC_PATH));
router.get('/*', (req, res) => {
    res.sendFile(path.join(STATIC_PATH, 'index.html'));
})

module.exports = router;