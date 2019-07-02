require('dotenv');
const Sequelize = require('sequelize');

const port = process.env.DB_PORT || 5432;
const host = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME;

const db = new Sequelize(`postgres://${host}:${port}/${dbName}`);

const Admin = require('../models/admin')(db, Sequelize);
const Card = require('../models//cards')(db, Sequelize);
const NexOfKin = require('../models//next-of-kin')(db, Sequelize);
const Plan = require('../models//plan')(db, Sequelize);
const Transaction = require('../models//transaction')(db, Sequelize);
const UserProfile = require('../models//user-profile')(db, Sequelize);
const User = require('../models/user')(db, Sequelize);

//RELATIONSHIPS
//User - NextOfKin (one to one)
NexOfKin.belongsTo(User);
User.hasOne(NexOfKin);

//User - Card (one to many)
Card.belongsTo(User);
User.hasMany(Card, { as: 'cards' });

//user -userProfile (one to one)
UserProfile.belongsTo(User);
User.hasOne(UserProfile);

//user - Transaction (one to many)
Transaction.belongsTo(User);
User.hasMany(Transaction, { as: 'transactions' });

//user - plan (one to many)
Plan.belongsTo(User);
User.hasMany(Plan, { as: 'plans' });

//Plan -Transaction
Transaction.belongsTo(Plan);
Plan.hasMany(Transaction, { as: 'transactions' });

module.exports = {db, Admin, User, NexOfKin, Plan, Transaction, UserProfile, Card}
