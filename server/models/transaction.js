module.exports = (db, Sequelize) => {
  const Transaction = db.define('transaction', {
    type: {
      allowNull: false,
      type: Sequelize.ENUM(['withdrawal', 'deposit', 'transfer', 'received'])
    },
    amount: {
      allowNull: false,
      type: Sequelize.DOUBLE
    }
  });
  return Transaction;
};

//note sender/receiver
//should there be a successful/unsuccessful status for transactions?
//shouldnt the card be added to deposits
