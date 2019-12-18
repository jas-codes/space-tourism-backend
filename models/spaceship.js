var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpaceShipSchema = new Schema({
    nameCode: String,
    totalSeats: Number,
    fuelCapacity: Number,
    age: Number,
    maxSpeed: Number,
});

module.exports = mongoose.model('SpaceShip', SpaceShipSchema);