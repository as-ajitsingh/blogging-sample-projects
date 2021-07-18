const express = require('express');
const router = express.Router();
router.get('/example', function (req, res) {
    res.send('Hello from path /example');
});
router.get('/', function (req, res) {
    res.send('Welcome to the App.');
});
module.exports = router;