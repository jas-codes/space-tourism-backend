var spaceship = require("../models/spaceship");
var spaceshipRepo = require("../repositories/spaceshipRepo");

async function getAllSpaceships(){
    return await spaceshipRepo.getSpaceships();
}

module.exports.getAllSpaceships = getAllSpaceships;
