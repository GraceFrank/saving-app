module.exports = (db, Sequelize) => {
  const Plan = db.define('plan', {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
     
    },
    target: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    status: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
      
    },
    deleted: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
  });
  return Plan;
};
