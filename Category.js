const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: '📚'
  },
  color: {
    type: String,
    default: '#ff8c00'
  },
  bookCount: {
    type: Number,
    default: 0
  },
  order: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// ایجاد slug خودکار از name
categorySchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.name.toLowerCase().replace(/\s+/g, '-');
  }
  next();
});

module.exports = mongoose.model('Category', categorySchema);
