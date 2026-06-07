const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['following', 'blocked', 'muted'],
    default: 'following'
  },
  notifications: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// اطمینان از عدم تکرار
followerSchema.index({ user: 1, follower: 1 }, { unique: true });

module.exports = mongoose.model('Follower', followerSchema);
