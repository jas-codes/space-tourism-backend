var express = require('express');
var router = express.Router();

//require Controller
var spaceshipController = require('../controllers/spaceshipController.js');

//Routes

//Get request for all spaceships
router.get('/spaceships', spaceshipController.spaceshipList);

module.exports = router;