const express = require('express');
const { User } = require('../db/db');
const router = express.Router();

router.post('', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;
    let user = await User.create({
      firstName,
      lastName,
      phone,
      email,
      password,
    });
    res.status(200).send(user);
  } catch (error) {
    res.send({error: error.message})
  }
});

module.exports = router;
