const express = require('express');
const { User } = require('../db/db');
const router = express.Router();


// created for test purpose

router.get('/Health', async (req, res) => {
  try {
    res.status(200).send('OK');
  } catch (error) {
    res.send({error: error.message})
  }
});

router.route('/dummyuser').post(async (req, res)=> {
  let user = await User.create(req.body)
  res.json(user)
})

module.exports = router;
