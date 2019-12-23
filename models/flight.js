const mongoose = require("../database.js");
const Schema = mongoose.Schema;

var FlightSchema = new Schema({
    flightNumber: String,
    ship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SpaceShipSchema'
    },
    depatureDate: Date,
    arrivalTime: Date,
    Gate: String,
    destination: String,
    leavingLocation: String
});

const Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;
