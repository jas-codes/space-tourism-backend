var Spaceship = require("../models/spaceship");
const mongoose = require("../database.js");


async function getSpaceships() {
    return await Spaceship.find();
}

async function getSpaceshipById(ship) {
    return await Spaceship.findOne(mongoose.Types.ObjectId(String(ship)));
}

function createSpaceship(req) {
    var ship = new Spaceship({
        nameCode: req.body.nameCode,
        totalSeats: req.body.totalSeats,
        fuelCapacity: req.body.fuelCapacity,
        maxSpeed: req.body.maxSpeed,
        age: req.body.age
    });
    ship.save(function(err) {
        if (err) return err
    });
    return 201;
}

async function deleteSpaceship(nameCode) {
    return await Spaceship.deleteMany({nameCode: nameCode});
}

module.exports.deleteSpaceship = deleteSpaceship;
module.exports.getSpaceships = getSpaceships;
module.exports.createSpaceship = createSpaceship;
module.exports.getSpaceshipById = getSpaceshipById;
