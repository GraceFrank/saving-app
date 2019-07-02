module.exports = (db, Sequelize) => {
  const Admin = db.define('admin', {
    //shouldnt we add a name at least for easy identification
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
    //what type of admin roles should there be
    role: {
      allowNull: false,
      type: Sequelize.ENUM(['admin', 'superAdmin']),
      defaultValue: 'admin'
    }
  });
  return Admin;
};
