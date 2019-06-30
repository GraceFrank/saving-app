module.exports = (db, Sequelize) => {
  const Cards = db.define('cards', {
    //how do we protect the users card details
    //i don't think bank name is needed
    bankName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    cardNumber: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    //just added this, should it be a string or ....
    expirationDate: {
      allowNull: false,
      type: Sequelize.STRING
    },
    cvc: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  });
  return Cards;
};
