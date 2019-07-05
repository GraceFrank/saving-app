module.exports = (db, Sequelize) => {
  const Transaction = db.define('transaction', {
    type: {
      allowNull: false,
      type: Sequelize.ENUM(['withdrawal', 'deposit', 'transfer', 'received'])
    },
    amount: {
      allowNull: false,
      type: Sequelize.DOUBLE
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  });
  return Transaction;
};

//should there be a successful/unsuccessful status for transactions?
