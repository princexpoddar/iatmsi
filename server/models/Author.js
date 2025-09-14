const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  affiliation: { type: String, required: true },
  email: { type: String, required: true },
  paperTitle: { type: String, required: true },
  paperAbstract: { type: String, required: true },
  track: { type: String, required: true },
  session: { type: String, required: true },
  presentationType: { 
    type: String, 
    enum: ['Oral', 'Poster', 'Workshop'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Accepted', 'Rejected', 'Under Review', 'Pending'], 
    default: 'Pending' 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

AuthorSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Author', AuthorSchema);
