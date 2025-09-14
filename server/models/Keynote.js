const mongoose = require('mongoose');

const KeynoteSchema = new mongoose.Schema({
  speaker: { type: String, required: true },
  affiliation: { type: String, required: true },
  biography: { type: String, required: true },
  title: { type: String, required: true },
  abstract: { type: String, required: true },
  imageUrl: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Keynote', KeynoteSchema);
