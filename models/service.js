//importing mongoose
const mongoose = require('mongoose');

//creating schema
const serviceSchema = new mongoose.Schema(
{
    name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create a model for the service
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
