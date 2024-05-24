const User = require('../models/User');

exports.createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

exports.findUserById = async (id) => {
  return await User.findById(id).select('-password');
};
