const express = require('express');
const userCtrl = require('../controllers/user')
const { User } = require('../db/db');
const bcrypt = require('bcrypt');
const mailer = require('../helpers/mailer');
const mailOptions = require('../helpers/mail-template');
const userController = require('../controllers/user')

const router = express.Router();

//sample
// router.get('/', (req, res) => {
//   return res.send({ user: 'users' });
// });
router
    .route('/')
    // GET ALL User 
    .get(userController.getAllUsers())
//route to login
router.post('/login', userController.login);

//route to reset token
router.post('/resetToken', userController.resetToken);

router.route('prefix')
router
    .route('/:userId')
    // GET user profile 
    .get(userController.getUser())


router
    .route('/:userId/profile')
    // GET user profile 
    .get(userController.getUserProfile())


router.param('userId', userCtrl.loadId)

module.exports = router;
