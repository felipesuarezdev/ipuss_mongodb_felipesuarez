const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const personRoutes = require('./rutas/rutas-api');

const app = express();
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect(config.mongoURI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

// Usar las rutas definidas en rutas/rutas-api.js
app.use('/rutas-api', personRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

// Escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
