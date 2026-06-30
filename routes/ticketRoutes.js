const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/tickets', ticketController.getTickets);
router.post('/tickets', ticketController.createTicket);

module.exports = router;