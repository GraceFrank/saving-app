require('dotenv').config();
const express = require('express');

const routes = require('./routes');
const { db } = require('./db/db');

const app = express();

//all routes
routes(app);

//syncing db with model
db.sync({ force: false }).then(() => {
  const PORT = process.env.API_PORT || 5000;
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});
