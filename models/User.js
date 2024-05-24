const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  deletedAt:{
    type:Date,
    default:null
  }
});

module.exports = mongoose.model('User', UserSchema);
