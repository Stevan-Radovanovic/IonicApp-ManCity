const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: { type: String, required: true },
  jerseyNumber: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Player', playerSchema);
