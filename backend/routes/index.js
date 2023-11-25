const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer()
const deviceController = require('../controllers/deviceController');

router.get('/', (req, res) => {
    res.send('Hello world');
});
router.get('/devices', deviceController.getDevices);
router.post('/devices', upload.none(), deviceController.createDevice);

module.exports = router;