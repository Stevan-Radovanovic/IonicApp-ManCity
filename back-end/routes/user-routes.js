const express = require('express');
const UserController = require('../controllers/user-controller');

const router = express.Router();

router.post('/register', UserController.Register);
router.post('/login', UserController.LogIn);

module.exports = router;
