const mongoose = require('mongoose');

const quejaSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['infraestructura', 'incendio', 'alumbrado', 'inundacion','Accidente'],
    required: true
  },
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ['abierta', 'en proceso', 'resuelta'],
    default: 'abierta'
  },
  createdAt: { type: Date, default: Date.now }
});

const quejas = mongoose.model('Queja', quejaSchema);

module.exports = quejas;