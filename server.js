// backend/server.js
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/redsocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Modelo
const Interaccion = mongoose.model('Interaccion', {
  usuario: String,
  tipo: String,       // like, comentario, etc.
  contenido: String,
  fecha: { type: Date, default: Date.now }
});

// Ruta para guardar interacción
app.post('/interaccion', async (req, res) => {
  const nueva = new Interaccion(req.body);
  await nueva.save();
  res.send({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
app.get('/interacciones', async (req, res) => {
  const datos = await Interaccion.find().sort({ fecha: -1 });
  res.json(datos);
});
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
