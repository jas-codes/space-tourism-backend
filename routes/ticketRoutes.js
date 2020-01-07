var express = require('express');
var router = express.Router();

//require Controller
var ticketController = require('../controllers/ticketsController');

//Routes

//Post request for creating a ticket
router.post('/ticket', ticketController.createTicket);

//Get request for getting ticket by id
router.get('/:ticketNumber', ticketController.getTicketById);

module.exports = router;