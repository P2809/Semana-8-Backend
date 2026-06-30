const logger = (req, res, next) => {
    const fecha = new Date().toISOString();
    console.log(`[${fecha}] Minitoreo: Método ${req.method} a la ruta ${req.url}`);
    next();
};

module.exports = logger;