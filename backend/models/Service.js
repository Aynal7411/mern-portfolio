const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String, // optional: URL or icon class
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);
