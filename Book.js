const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  cover: {
    type: String,
    default: '📘'
  },
  price: {
    type: Number,
    default: 0 // 0 = رایگان
  },
  currency: {
    type: String,
    default: 'TON'
  },
  pages: {
    type: Number,
    default: null
  },
  language: {
    type: String,
    default: 'fa'
  },
  published: {
    type: Date,
    default: null
  },
  content: {
    type: String, // محتوای کتاب یا URL فایل
    default: null
  },
  contentUrl: {
    type: String, // لینک دانلود/خواندن
    default: null
  },
  stats: {
    views: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    purchases: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    ratingCount: { type: Number, default: 0 }
  },
  trending: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// ایجاد slug خودکار
bookSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title.toLowerCase().replace(/\s+/g, '-');
  }
  next();
});

// شاخص‌های جستجو
bookSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Book', bookSchema);
