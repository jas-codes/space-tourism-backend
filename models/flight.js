const mongoose = require("../database.js");
const Schema = mongoose.Schema;

var FlightSchema = new Schema({
    flightNumber: String,
    ship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SpaceShipSchema'
    },
    depatureDate: Date,
    arrivalDate: Date,
    gate: String,
    destination: String,
    leavingLocation: String
});

const Flight = mongoose.model('SpaceFlight', FlightSchema);
module.exports = Flight;
