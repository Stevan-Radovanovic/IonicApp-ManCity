const mongoose = require('mongoose');

const coachSchema = mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Coach', coachSchema);
