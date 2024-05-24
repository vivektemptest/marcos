const { check, validationResult } = require('express-validator');
const userService = require('../services/userService');

exports.validateUser = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
  check('email').custom(async (email) => {
    const user = await userService.findUserByEmail(email);
    if (user) {
      throw new Error('User already exists');
    }
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
