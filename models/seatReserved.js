const mongoose = require("../database.js");
const Schema = mongoose.Schema;

var ReservedSeatSchema = new Schema({
    flightNumber: String,
    seatNo: Number,
    seatCode: String
});

var ReservedSeat = mongoose.model('ReservedSeat', ReservedSeatSchema);
module.exports = ReservedSeat;