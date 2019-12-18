const mongoose = require("../database.js");
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('Flight', FlightSchema);
