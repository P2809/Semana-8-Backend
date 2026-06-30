const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Servir archivos estáticos de la vista
app.use(express.static(path.join(__dirname, 'views')));

// Rutas de la API
app.use('/api', ticketRoutes);

// Manejo de Error 404 (Ruta no encontrada)
app.use((req, res) => {
    res.status(404).json({ error: 'Recurso no encontrado.' });
});

app.listen(PORT, () => {
    console.log(`Servidor backend corriendo eficientemente en http://localhost:${PORT}`);
});