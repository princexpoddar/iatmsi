const mongoose = require('mongoose');

const ConferenceProgramSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ['stats', 'highlight', 'schedule', 'theme', 'info'], 
    required: true 
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // Flexible data structure
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ConferenceProgramSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('ConferenceProgram', ConferenceProgramSchema);
