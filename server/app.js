require('dotenv').config();
const express = require('express');

const routes = require('./routes');

const app = express();

//all routes
routes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
