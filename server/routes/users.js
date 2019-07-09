const express = require('express');
const { User } = require('../db/db');
const bcrypt = require('bcrypt');

const router = express.Router();

//sample
// router.get('/', (req, res) => {
//   return res.send({ user: 'users' });
// });

router.post('/login', async (req, res) => {
  // find user by email
  let user = await User.findOne({ where: { email: req.body.email } });
  if (!user) res.status(401).send({ error: 'Invalid username/password' });

  //compare the passwords
  const password = bcrypt.compare(user.password, req.password);
  if (!password) return res.status(400).send('Invalid email/password');

  res.send(user);
});



module.exports = router;
