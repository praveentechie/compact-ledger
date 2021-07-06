import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ContactType from '../../domain/contact/ContactType';
import PhoneDomain from '../../domain/contact/PhoneDomain';

import styles from './multiple-input.scss';

const defaultValue: PhoneDomain[] = [];

const MultipleInput = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(defaultValue);

  const addNewField = () => {
    let updatedPhoneNumbers = [...phoneNumbers, new PhoneDomain('', ContactType.GROUP)];
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const updateForm = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    let updatedPhoneNumbers: PhoneDomain[] = [...phoneNumbers];
    let updatedNumber = updatedPhoneNumbers.find(number => id === number._id);
    switch (event.target.name) {
      case 'type':
        updatedNumber!.type = event.target.value as ContactType;
        break;
      case 'number':
        updatedNumber!.number = event.target.value;
        break;
    }

    setPhoneNumbers(updatedPhoneNumbers);
  };

  console.log(phoneNumbers);

  return (
    <>
      <Form.Group as={Row}>
        <Form.Label column sm={12}>
          <span>Phone numbers</span>
          <Button className={`${styles.addItem} float-right`} variant='primary' onClick={addNewField}>
            <i className='fa fa-plus' />
          </Button>
        </Form.Label>
      </Form.Group>
      {
        phoneNumbers.map(phoneNumber => (
          <Form.Group as={Row} key={phoneNumber._id}>
            <Form.Label column sm={3}>
              <Form.Control as='select' name='type' value={phoneNumber.type} onChange={updateForm.bind(this, phoneNumber._id)}>
                {
                  Object.values(ContactType).map(contactType => (<option key={contactType}>{contactType}</option>))
                }
              </Form.Control>
            </Form.Label>
            <Col sm={9}>
              <Form.Control type='text' name='number' value={phoneNumber.number} onChange={updateForm.bind(this, phoneNumber._id)} />
            </Col>
          </Form.Group>  
        ))
      }
    </>
  );
};

export default MultipleInput;