const ticketService = require('../services/ticketService');

// Manejar GET /api/tickets
const getTickets = async (req, res) => {
    try {
        const tickets = await ticketService.obtenerTodosLosTickets();
        res.status(200).json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor al obtener datos.' });
    }
};

// Manejar POST /api/tickets
const createTicket = async (req, res) => {
    const { nombre, correo, asunto, mensaje } = req.body;

    // Validación simple
    if (!nombre || !correo || !asunto || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    try {
        const nuevoId = await ticketService.guardarTicket({ nombre, correo, asunto, mensaje });
        res.status(201).json({ mensaje: 'Ticket registrado con éxito', id: nuevoId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor al guardar.' });
    }
};

module.exports = {
    getTickets,
    createTicket
};