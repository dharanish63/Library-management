const mongoose = require('mongoose');

// Define the Image schema
const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  originalName: {
    type: String,
    required: true
  }
});

// Create the Image model from the schema
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
