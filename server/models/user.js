require('dotenv').config();
const jwt = require('jsonwebtoken');
const Encryption = require('../helpers/encryption');

module.exports = (db, Sequelize) => {
  const User = db.define('user', {
    firstName: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    phone: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        not: ['[a-z]', 'i']
      }
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    //hash password before save?
    password: {
      allowNull: false,
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    },
    deleted: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });

  User.beforeCreate(async function (user) {
    user.password = await Encryption.hashPassword(user.password);
  });

  User.prototype.generateToken = function (expirationTime = 60) {
    //expiration time is in seconds
    //synchronous vs asynchronous
    return jwt.sign(
      {
        userId: this.id
      },
      `${process.env.PRIVATE_KEY}`,
      { expiresIn: expirationTime }
    );
  };

  return User;
};
