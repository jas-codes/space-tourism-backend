var TicketRepo = require('../repositories/ticketRepo');

async function createTicket(req){
    return TicketRepo.createTicket(req);
}

module.exports.createTicket = createTicket;