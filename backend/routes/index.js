const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer()
const deviceController = require('../controllers/deviceController');

router.get('/', (req, res) => {
    res.send('Hello world');
});
router.post('/devices', upload.none(), deviceController.createDevice);
router.patch('/devices/:id', upload.none(), deviceController.updateDevice);
router.get('/devices', deviceController.getDevices);
router.get('/devices/:id', deviceController.getDevice);
router.delete('/devices/:id', deviceController.deleteDevice);

module.exports = router;