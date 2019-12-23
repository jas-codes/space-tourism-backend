var Spaceship = require("../models/spaceship");

async function getSpaceships() {
    return await Spaceship.find();
}

module.exports.getSpaceships = getSpaceships;
