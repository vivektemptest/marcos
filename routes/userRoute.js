const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');
const { validateUser } = require('../validators/userValidator');

router.get('/', userController.getUser);
router.post('/',validateUser,userController.register)

module.exports = router;
