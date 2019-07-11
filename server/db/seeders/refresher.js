require('dotenv').config()
const { db } = require('../db')

//deleting all db contents
db.sync({ force: true })