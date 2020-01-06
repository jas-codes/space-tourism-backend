var ticketLogic = require('../Logic/ticketLogic');

//Post create a \ticket
exports.createTicket = async function(req, res) {
    var result = await ticketLogic.createTicket(req);
    res.send(result);
  }