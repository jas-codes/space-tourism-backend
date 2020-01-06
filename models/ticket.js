const mongoose = require("../database.js");
const Schema = mongoose.Schema;
const Seat = require('../models/seat');

var TicketSchema = new Schema({
    flightNumber: String,
    ticketNumber: String,
    firstName: String,
    lastName: String,
    dob: Date,
    passportNumber: Number,
    seats: [{
        seatNo: Number,
        seatCode: String
    }],
    emailAddress: String
});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;