import moment from 'moment';
import React from 'react';
import Transaction from '../domain/Transaction';
import Table from '../shared/table/Table';
import { TableHeader } from '../shared/table/TableProps';
import { FORMATS } from '../utils/constants';
//import TransactionEntry from './TransactionEntry';

const tableHeader: Array<TableHeader> = [
  {columnKey: 'entryType', displayText: 'Type'},
  {columnKey: 'dateObject', displayText: 'Date'},
  {columnKey: 'amount', displayText: 'Amount'}
];

const formatDate = (value: string) => moment(value, FORMATS.LONG_DATE_TIME_UTC).format(FORMATS.GROUP_DATE);

const TransactionList = ({transactions = []}: {transactions: Array<Transaction>}) => {
  return (
    <div className=''>
      <Table
        headers={tableHeader}
        data={transactions}
        aggregateBy='dateTime'
        formatKey={formatDate}
      />
    </div>
  );
};

export default TransactionList;