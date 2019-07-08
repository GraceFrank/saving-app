const {User} = require('../db/db');
const bcrypt = require('bcrypt');

class UserController {
  signUp() { }

  async login(req, res) {
    //find user by email
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) res.status(401).send({ error: 'Invalid username/password' });

    //compare the passwords
    const password = await bcrypt.compare(user.password, req.body.password);
    if (!password) return res.status(400).send('Invalid email/password');

    //generate token
    const token = user.generateToken();
    res.send({ token });
  }

  async resetToken(req, res) {
    const user = await User.findOne({ _id: req.user.id });
    mailer.sendMail(user.email, user.firstName, token, mailOptions);

    res.send('Please check your email and verify your account');
  }
}

module.exports = new UserController();
