var TicketRepo = require('../repositories/ticketRepo');
var SeatRepo = require('../repositories/seatRepo');
var SpaceFlightLogic = require('../Logic/spaceFlightLogic');

async function createTicket(req){
    createReservedSeats(req.body.seats, req.body.flightNumber);
    SpaceFlightLogic.updateFlightSeats(req.body.flightNumber, req.body.seatQuantity);
    return TicketRepo.createTicket(req);
}

function createReservedSeats(seats, flightNumber){
    for(let seat of seats){
        SeatRepo.createReservedSeat(seat, flightNumber);
    }
}

async function getTicketById(ticketNumber){
    return await TicketRepo.getTicketById(ticketNumber);
}

module.exports.createReservedSeats = createReservedSeats;
module.exports.getTicketById = getTicketById;
module.exports.createTicket = createTicket;