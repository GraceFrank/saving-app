require('dotenv').config();
const _ = require('lodash');
const jwt = require('jsonwebtoken');


const { User } = require('../db/db');
const mailer = require('../helpers/mailer');
const { signupMailTemplate } = require('../helpers/mail-template');


class authController {

  /**
  * Method to create a new user on sign up
  * @param {object} req  Request object
  * @param {object} res Response to request
  * @return {object} user object as JSON response
  */
  async signup(req, res) {

    //search for existing user
    let user = await User.findOne({ where: { email: req.body.email } });
    if (user) return res.status(409).send('user already exists')

    //creating a user
    user = await User.create(req.body);
    if (!user) return res.status(500).send('error creating account, please try again');

    //token generation
    const token = user.generateToken(60);
    user = _.pick(user, ['firstName', 'lastName', 'email', 'phone'])

    //send mail after successful
    mailer.sendMail(user.email, user.firstName, signupMailTemplate, token)

    res.send({ data: user, message: `a mail has been sent to ${user.email}, please check your mail to verify your account` })

  }

  async verify(req, res) {
    let token = req.params / token
    const secretKey = process.env.PRIVATE_KEY
    const user = jwt.verify(token, secretKey);
    req.user = user

  }

}

module.exports = new authController();