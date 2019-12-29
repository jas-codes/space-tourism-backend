var spaceshipRepo = require("../repositories/spaceshipRepo");

async function getAllSpaceships(){
    return await spaceshipRepo.getSpaceships();
}

function createSpaceship(req){
    return spaceshipRepo.createSpaceship(req);
}

async function getSpaceshipById(shipId){
    return await spaceshipRepo.getSpaceshipById(shipId);
}

module.exports.getSpaceshipById = getSpaceshipById;
module.exports.getAllSpaceships = getAllSpaceships;
module.exports.createSpaceship = createSpaceship;
