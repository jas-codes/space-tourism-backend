var Spaceship = require("../models/spaceship");

async function getSpaceships() {
    return await Spaceship.find();
}

function getSpaceshipById(shipId){
    return Spaceship.findById(shipId);
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

module.exports.getSpaceships = getSpaceships;
module.exports.createSpaceship = createSpaceship;
module.exports.getSpaceshipById = getSpaceshipById;
