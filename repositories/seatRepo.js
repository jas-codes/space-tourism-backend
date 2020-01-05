var Seat = require('../models/seat');
var ReservedSeat = require('../models/seatReserved');


async function getReservedSeatsByFlight(flightNumber) {
    var query = { flightNumber: flightNumber };
    return await ReservedSeat.find(query);
}

async function createReservedSeat(seat, flightNumber) {
    var reservedSeat = new ReservedSeat({
        flightNumber: flightNumber,
        seatCode: seat.seatCode,
        seatNo: seat.seatNo
    });
    reservedSeat.save(function(err) {
        if (err) return err
    });
    return 201;
}

module.exports.createReservedSeat = createReservedSeat;
module.exports.getReservedSeatsByFlight = getReservedSeatsByFlight;