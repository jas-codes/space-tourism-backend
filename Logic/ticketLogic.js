var TicketRepo = require('../repositories/ticketRepo');
var SeatRepo = require('../repositories/seatRepo');

async function createTicket(req){
    createReservedSeats(req.body.seats, req.body.flightNumber);
    return TicketRepo.createTicket(req);
}

function createReservedSeats(seats, flightNumber){
    for(let seat of seats){
        SeatRepo.createReservedSeat(seat, flightNumber);
    }
}

module.exports.createTicket = createTicket;