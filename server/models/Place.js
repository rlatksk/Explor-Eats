const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['meal', 'dessert', 'snack'],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  openingTime: {
    type: String,
    required: true,
  },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;