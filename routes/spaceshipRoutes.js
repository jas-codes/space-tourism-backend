var express = require('express');
var router = express.Router();

//require Controller
var spaceshipController = require('../controllers/spaceshipController.js');

//Routes

//Get request for all spaceships
router.get('/spaceships', spaceshipController.spaceshipList);

//Get request for spaceship by Id
router.get('/spaceships/:shipId', spaceshipController.getSpaceshipById);

//Post request for creating a spaceship
router.post('/spaceship', spaceshipController.createSpaceship);

//Delete request for a spaceship
router.delete('/spaceship', spaceshipController.deleteSpaceship);

module.exports = router;