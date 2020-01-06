var ticketLogic = require('../Logic/ticketLogic');

//Post create a \ticket
exports.createTicket = async function(req, res) {
    var result = await ticketLogic.createTicket(req);
    res.send(result);
  }

//Get ticket by Id
exports.getTicketById = async function(req, res){
  var result = await ticketLogic.getTicketById(req.params.ticketNumber);
  res.send(result);
}