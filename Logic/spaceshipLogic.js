var spaceshipRepo = require("../repositories/spaceshipRepo");

async function getAllSpaceships(){
    return await spaceshipRepo.getSpaceships();
}

function createSpaceship(req){
    return spaceshipRepo.createSpaceship(req);
}

function getSpaceshipById(shipId){
    return spaceshipRepo.getSpaceshipById(shipId);
}

module.exports.getSpaceshipById = getSpaceshipById;
module.exports.getAllSpaceships = getAllSpaceships;
module.exports.createSpaceship = createSpaceship;
