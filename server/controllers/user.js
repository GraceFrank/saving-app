const { User } = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  signUp() { }

  async login(req, res) {
    //find user by email
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) res.status(401).send({ error: 'Invalid username/password' });

    //compare the passwords
    const password = await bcrypt.compare(req.body.password, user.password);
    if (!password) return res.status(400).send('Invalid email/password');

    //generate token
    const token = user.generateToken();
    res.send({ token, expiry: 60 });
  }

  async resetToken(req, res) {
    //get token from header
    let token = req.header('authToken');
    if (!token) return res.send('Invalid Token');

    req.user = jwt.verify(token, process.env.PRIVATE_KEY);
    
    //find user and generate new token
    const user = await User.findOne({ _id: req.user.userId });
    token = user.generateToken();

    res.send({ token, expiry: 60 });
  }
}


module.exports = new UserController();
