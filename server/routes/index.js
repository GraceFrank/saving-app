//npm/yarn packages
const express = require('express');
const bodyParser = require('body-parser');

//my modules
const check = require('./check');
// modules
const auth = require('../routes/auth');
const users = require('../routes/users');
const router = express.Router();

//all routes/ goes here
router.use('/Check', check);
router.use('/users', users);
router.use('/auth', auth);


module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/v1', router);
};
