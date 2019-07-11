//npm/yarn packages
const express = require('express');
const bodyParser = require('body-parser');

// modules
const auth = require('../routes/auth');
const router = express.Router();

//all routes/ goes here
router.use('/users', users);
router.use('/auth', auth);


module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/v1', router);
};
