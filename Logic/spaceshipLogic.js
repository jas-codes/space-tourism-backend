var spaceship = require("../models/spaceship");
var spaceshipRepo = require("../repositories/spaceshipRepo");

function getAllSpaceships(){
    return spaceshipRepo.getSpaceships();
}
