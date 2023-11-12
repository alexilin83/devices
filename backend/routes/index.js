const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

router.get('/', (req, res) => {
    res.send('Hello world');
});
router.get('/devices', deviceController.getDevices);
router.post('/devices', deviceController.createDevice);

module.exports = router;