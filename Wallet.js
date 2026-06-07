const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  balance: {
    type: Number,
    default: 0
  },
  currency: {
    type: String,
    default: 'TON'
  },
  tonAddress: {
    type: String,
    default: null
  },
  tonConnected: {
    type: Boolean,
    default: false
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Payment'
    }
  ],
  totalEarnings: {
    type: Number,
    default: 0
  },
  totalSpending: {
    type: Number,
    default: 0
  },
  lastWithdrawal: {
    type: Date,
    default: null
  },
  withdrawalLimit: {
    type: Number,
    default: 5000000 // حداقل برای برداشت
  },
  status: {
    type: String,
    enum: ['active', 'frozen', 'suspended'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Wallet', walletSchema);
