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
  foodImages: {
    type: [String],
    required: true,
  },
  ambienceImages: {
    type: [String],
    required: true,
  }
});

function arrayLimit(val) {
  return val.length <= (this.path === 'foodImages' ? 3 : 5);
}

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;