# Actividad 2.4: Integración de Node.js + Express en el Desarrollo Backend

Este proyecto consiste en la implementación de un backend modular y funcional utilizando **Node.js** y el framework **Express**. La aplicación está diseñada bajo una arquitectura limpia organizada por capas (Rutas, Controladores, Servicios y Middlewares), conectada a un motor de bases de datos relacional **MySQL** y con una interfaz gráfica responsiva construida con **Bootstrap**.

---

## 🛠️ Aprendizajes y Competencias de la Actividad
- **Desarrollo Backend:** Configuración y puesta en marcha de un servidor web eficiente con Express.
- **Arquitectura por Capas:** Separación rigurosa de responsabilidades para mejorar la mantenibilidad del software.
- **Persistencia de Datos:** Conexión e interacción asíncrona con una base de datos MySQL mediante consultas SQL.
- **Middleware y Monitoreo:** Captura de flujos de peticiones mediante funciones middleware personalizadas.
- **Control de Errores:** Manejo e implementación semántica de códigos de estado HTTP.

---

## 📁 Arquitectura y Estructura del Proyecto

El proyecto sigue un estándar profesional dividiendo el código según su responsabilidad:

```text
Semana 8/
├── config/           # Configuración y pool de conexión a la Base de Datos (MySQL)
│   └── db.js
├── controllers/      # Controladores: Manejan las peticiones HTTP y las respuestas (req, res)
│   └── ticketController.js
├── middlewares/      # Funciones intermedias (Logger de monitoreo de peticiones)
│   └── logger.js
├── routes/           # Definición formal de los Endpoints / Rutas de la API
│   └── ticketRoutes.js
├── services/         # Capa de negocio: Consultas SQL directas a la base de datos
│   └── ticketService.js
├── views/            # Interfaz de usuario (Frontend estático)
│   └── index.html    # Página web enriquecida con Bootstrap 5 y Fetch API
├── app.js            # Punto de entrada principal y orquestador del servidor Express
└── package.json      # Manifiesto del proyecto, scripts y gestión de dependencias

-- 1. Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS control_tickets;
USE control_tickets;

-- 2. Crear la tabla estructural para los registros
CREATE TABLE IF NOT EXISTS tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Insertar un registro inicial de prueba para verificar el método GET
INSERT INTO tickets (nombre, correo, asunto, mensaje) 
VALUES ('Pedro Castro', 'pedro@correo.com', 'Consulta Inicial', 'Servidor Express y MySQL conectados exitosamente.');
