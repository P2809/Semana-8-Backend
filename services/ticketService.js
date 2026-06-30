const db = require('../config/db');

const obtenerTodosLosTickets = async () => {
    const [rows] = await db.query('SELECT * FROM tickets ORDER BY fecha_creacion DESC');
    return rows;
};

const guardarTicket = async (datosTicket) => {
    const { nombre, correo, asunto, mensaje } = datosTicket;
    const [result] = await db.query(
        'INSERT INTO tickets (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)',
        [nombre, correo, asunto, mensaje]
    );
    return result.insertId;
};

module.exports = {
    obtenerTodosLosTickets,
    guardarTicket
};