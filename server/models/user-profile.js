module.exports = (db, Sequelize) => {
  const UserProfile = db.define('userProfile', {
    gender: {
      type: Sequelize.STRING
    },

    //should address not be a separate table?
    address: {
      type: Sequelize.STRING
    },
    //i guess this is a url
    avatar: {
      allowNull: false,
      type: Sequelize.STRING,
      validations: {
        isUrl: true
      }
    }
  });
  return UserProfile;
};
