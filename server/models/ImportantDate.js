const mongoose = require('mongoose');

const ImportantDateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  category: { 
    type: String, 
    enum: ['Submission', 'Review', 'Notification', 'Registration', 'Conference', 'Other'], 
    required: true 
  },
  isActive: { type: Boolean, default: true },
  priority: { type: Number, default: 0 }, // Higher number = higher priority
  isStrikethrough: { type: Boolean, default: false }, // For showing date changes
  order: { type: Number, default: 0 }, // For drag and drop ordering
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ImportantDateSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('ImportantDate', ImportantDateSchema);
