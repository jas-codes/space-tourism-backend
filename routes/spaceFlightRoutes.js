var express = require('express');
var router = express.Router();

//require controller
var spaceFlightController = require('../controllers/spaceFlightController');

//Post create spaceflight
router.post('/spaceFlight', spaceFlightController.createSpaceFlight);

//Get all flights
router.get('/spaceFlights', spaceFlightController.getAllSpaceFlights);

module.exports = router;