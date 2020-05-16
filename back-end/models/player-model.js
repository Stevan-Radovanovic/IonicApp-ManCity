const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  jerseyNumber: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

playerSchema.plugin(unique);

module.exports = mongoose.model('Player', playerSchema);
