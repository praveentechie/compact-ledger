import React from 'react';
import Transaction from '../modal/Transaction';
import Table from '../shared/table/Table';
import { TableHeader } from '../shared/table/TableProps';
//import TransactionEntry from './TransactionEntry';

const tableHeader: Array<TableHeader> = [
  {columnKey: 'entryType', displayText: 'Type'},
  {columnKey: 'dateTime', displayText: 'Date'},
  {columnKey: 'amount', displayText: 'Amount'}
];

const TransactionList = ({transactions = []}: {transactions: Array<Transaction>}) => {
  return (
    <div className=''>
      <Table
        headers={tableHeader}
        data={transactions}
      />
    </div>
  );
};

export default TransactionList;