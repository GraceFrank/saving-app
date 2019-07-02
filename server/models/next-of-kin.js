module.exports = (db, Sequelize) => {
  const NextOfKin = db.define('nextOfKin', {
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
    }
  });

  return NextOfKin;
};
