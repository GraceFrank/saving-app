const express = require('express');
const authController = require('../controllers/auth')
const validateSignUpDetails = require('../middlewares/api-validations/signup')

const router = express.Router();

//routes
router.post('/signup', validateSignUpDetails, authController.signup);

module.exports = router