module.exports = (db, Sequelize) => {
  const Users = db.define('user', {
    firstName: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
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
    }
  });

  return Users;
};
