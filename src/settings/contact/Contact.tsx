import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

import styles from './contact.scss';

let contacts = [
  {
    name: 'Praveen',
    company: 'Agilysys',
    phoneNumbers: ['12345', '65432']
  }
];

const Contact = () => {
  return (
    <div className={`col-12 p-0 ${styles.contact}`}>
      <h2 className="col-12">Contacts</h2>
      <div className={`${styles.contactContainer} row m-0`}>
        <ContactList contactList={contacts}/>
        <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;