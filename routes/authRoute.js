const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
// const authController = require('../controllers/authController');

// router.post(
//   '/register',
//   [
//     check('name', 'Name is required').not().isEmpty(),
//     check('email', 'Please include a valid email').isEmail(),
//     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
//   ],
//   authController.register
// );

// router.post(
//   '/login',
//   [
//     check('email', 'Please include a valid email').isEmail(),
//     check('password', 'Password is required').exists()
//   ],
//   authController.login
// );

module.exports = router;
