import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { transactionCollection } from '../utils/collections';
import Transaction from '../modal/Transaction';
import homeScss from './_home.scss';
import TransactionList from './TransactionList';

const defaultTransaction = new Transaction('payable', new Date().toISOString(), 0);

const HomePage = () => {
  let [ transactionList, setTransactionList ] = useState<Array<Transaction>>([]);
  let [ addTransaction, setAddTransaction ] = useState<boolean>(false);
  let [ transactionForm, setTransactionForm ] = useState<Transaction>(defaultTransaction);

  const getTransactions = async () => {
    let transactions = await transactionCollection.getAll();
    setTransactionList(transactions);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  const toggleAddTransaction = () => {
    setAddTransaction(!addTransaction);
    initNewForm();
  };

  const initNewForm = () => {
    setTransactionForm(defaultTransaction);
  };

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedForm = {
      ...transactionForm,
      [event.target.name]: event.target.value
    };
    setTransactionForm(updatedForm);
  };

  const saveTransaction = async () => {
    await transactionCollection.insert(transactionForm);
    toggleAddTransaction();
    getTransactions();
  };

  console.log('transactionList', transactionList);

  return (
    <div id='home' className={homeScss.homePage}>
      <div className={homeScss.homeWrapper}>
        <div className={`${homeScss.transactionList} ${homeScss.expanded}`}>
          <TransactionList transactions={transactionList} />
          <Button variant="primary" onClick={toggleAddTransaction}>Add transaction</Button>
        </div>
        {
          addTransaction &&
          <div className={`${homeScss.transactionDetails} form`}>
            <h3>Create transaction</h3>
            <div className='inline field-row'>
              <label className='label'>Type</label>
              <div className='field'>
                <Form.Check inline
                  label='Receivable'
                  name='entryType'
                  type='radio'
                  value='receivable'
                  checked={transactionForm.entryType === 'receivable'}
                  onChange={updateForm}
                />
                <Form.Check inline
                  label='Payable'
                  name='entryType'
                  type='radio'
                  value='payable'
                  checked={transactionForm.entryType === 'payable'}
                  onChange={updateForm}
                />
              </div>
            </div>
            <div className='field-row'>
              <label htmlFor='dateTime' className='label'>Date</label>
              <input className='field'
                type='datetime-local'
                name='dateTime'
                value={transactionForm.dateTime}
                onChange={updateForm}
              />
            </div>
            <div className='field-row'>
              <label htmlFor='amount' className='label'>Amount</label>
              <input className='field' type='number' name='amount' value={transactionForm.amount} onChange={updateForm}/>
            </div>
            <div className='action-bar'>
              <ul>
                <li>
                  <button>Cancel</button>
                </li>
                <li className='right-align'>
                  <button className='' onClick={saveTransaction}>Save</button>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  )
};

export default HomePage;