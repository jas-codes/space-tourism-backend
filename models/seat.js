const mongoose = require("../database.js");
const Schema = mongoose.Schema;

var SeatSchema = new Schema({
    seatNo: Number,
    seatCode: String
});

var Seat = mongoose.model('Seat', SeatSchema);
module.exports = Seat;