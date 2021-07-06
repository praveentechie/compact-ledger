import React from 'react';
import Transaction from '../domain/Transaction';

// ### typescript: setting type for rest/spread operator
const TransactionEntry = ({transaction}: {transaction: Transaction}) => {
  return (
    <div className=''>
      {transaction.amount}
    </div>
  );
};

export default TransactionEntry;