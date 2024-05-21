const { signup } = require('../controllers/AuthController');

const router = require('express').Router();

router.route('/signup').post(signup)

module.exports = router; 