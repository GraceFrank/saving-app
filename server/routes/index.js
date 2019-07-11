//core node modules / yarn packages
const express = require('express');
const bodyParser = require('body-parser');

//my modules
// const users = require('./users');
const users = require('../routes/users');
const router = express.Router();

//all routes/ goes here
router.use('/users', users);


module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/api/v1', router);
};
