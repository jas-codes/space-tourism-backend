var express = require('express');
var router = express.Router();

//require controller
var seatsController = require('../controllers/seatsController');

//Establish websocket connection 
router.post('/connection', seatsController.createConnection);

module.exports = router;