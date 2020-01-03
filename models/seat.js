const mongoose = require("../database.js");
const Schema = mongoose.Schema;

var SeatSchema = new Schema({
    rowNumber: Number,
    seatPosition: String
});

var Seat = mongoose.model('Seat', SeatSchema);
module.exports = Seat;