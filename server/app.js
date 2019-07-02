require('dotenv').config();
const express = require('express');

const routes = require('./routes');
const {db} = require('./db/db');

const app = express();


//all routes
routes(app);

const PORT = process.env.API_PORT || 5000;
db.sync({ force: true });

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
