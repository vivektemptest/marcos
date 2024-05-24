const { allUser,createUser,updateUser, deleteUser, getUserById } = require('../controllers/UserController');

const router = require('express').Router();
const { validateUser } = require('../validators/userValidator');
router.get('/',allUser);
router.post('/',createUser,validateUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser)
router.get('/:id',getUserById)
module.exports = router;