const mongoose = require("../database.js");
const Schema = mongoose.Schema;

var SpaceShipSchema = new Schema({
    shipId: Schema.Types.ObjectId, 
    nameCode: String,
    totalSeats: Number,
    fuelCapacity: Number,
    age: Number,
    maxSpeed: Number,
});

var Spaceship = mongoose.model('Spaceship', SpaceShipSchema);
module.exports = Spaceship;