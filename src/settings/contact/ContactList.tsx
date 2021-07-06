import React from "react";
import ContactItem from "./ContactItem";

import styles from './contact.scss';

const ContactList = (props: any) => {
  return (
    <div className={`${styles.contactList} col-4`}>
      {
        props.contactList.map((contact: any) => <ContactItem contact={contact} />)
      }
    </div>
  );
};

export default ContactList;