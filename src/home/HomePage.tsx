import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import moment from 'moment';

import { transactionCollection } from '../utils/collections';
import Transaction from '../domain/Transaction';
import TransactionList from './TransactionList';
import { FORMATS } from '../utils/constants';

import homeScss from './_home.scss';
import { formatToTimeZone } from '../utils/dateUtils';

const defaultTransaction = new Transaction('payable', moment().format(FORMATS.LONG_DATE_TIME));

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
      ...Object.assign(transactionForm),
      [event.target.name]: event.target.value
    }
    setTransactionForm(updatedForm);
  };

  const saveTransaction = async () => {
    transactionForm.dateTime = formatToTimeZone(transactionForm.dateTime, FORMATS.LONG_DATE_TIME_UTC);
    await transactionCollection.insert(transactionForm);
    toggleAddTransaction();
    getTransactions();
  };

  console.log('transactionList', transactionList);

  return (
    <div id='home' className={`${homeScss.homePage}`}>
      <div className={`row ${homeScss.homeWrapper}`}>
        <div className={`col-12 ${homeScss.transactionList}`}>
          <TransactionList transactions={transactionList} />
          <Button variant="primary" onClick={toggleAddTransaction}>Add transaction</Button>
        </div>
        <Modal centered
          size='lg'
          backdrop='static'
          keyboard={false}
          className={homeScss.modalForm}
          show={addTransaction}
          onHide={toggleAddTransaction}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className={`${homeScss.transactionDetails} form col-12 p-0`}>
              <Form.Group as={Row} className={homeScss.formRow}>
                <Form.Label column sm={3}>Type</Form.Label>
                <Col sm={9}>
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
                </Col>
              </Form.Group>
              <Form.Group as={Row} className={homeScss.formRow}>
                <Form.Label column sm={3}>Date</Form.Label>
                <Col sm={9}>
                  <Form.Control type='datetime-local'
                    name='dateTime'
                    value={transactionForm.dateTime}
                    onChange={updateForm}
                    step={60}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className={homeScss.formRow}>
                <Form.Label column sm={3}>Amount</Form.Label>
                <Col sm={9}>
                  <Form.Control type='number' name='amount'
                    value={transactionForm.amount}
                    onChange={updateForm}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className={homeScss.formRow}>
                <Form.Label column sm={3}>Account</Form.Label>
                <Col sm={9}>
                  <Form.Control type='text' name='account'
                    value={transactionForm.account}
                    onChange={updateForm}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className={homeScss.formRow}>
                <Form.Label column sm={3}>Expense category</Form.Label>
                <Col sm={9}>
                  <Form.Control type='text' name='category'
                    value={transactionForm.category}
                    onChange={updateForm}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className={homeScss.formRow}>
                <Form.Label column sm={3}>Notes</Form.Label>
                <Col sm={9}>
                  <Form.Control type='text' name='notes'
                    value={transactionForm.notes}
                    onChange={updateForm}
                  />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className='action-bar col-12'>
              <Button variant='secondary' onClick={toggleAddTransaction}>Cancel</Button>
              <Button variant='primary' className='right-align' onClick={saveTransaction}>Save</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
};

export default HomePage;