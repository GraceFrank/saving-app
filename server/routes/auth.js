const express = require('express');
const authController = require('../controllers/auth');
const validateSignUpDetails = require('../middlewares/api-validations/signup');
const userController = require('../controllers/auth');


const router = express.Router();

//routes
router.post('/signup', validateSignUpDetails, authController.signup);

//route to login
router.post('/login', userController.login);

//route to reset token
router.post('/resetToken', userController.resetToken);

module.exports = router;