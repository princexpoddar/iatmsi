const mongoose = require('mongoose');

const pdfDocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['call-for-papers', 'guidelines', 'template', 'sponsorship', 'brochure', 'flyer', 'other'],
    default: 'other'
  },
  page: {
    type: String,
    required: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('PdfDocument', pdfDocumentSchema);
