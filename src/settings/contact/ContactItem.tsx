import React from "react";

import contactScss from './contact.scss';

const ContactItem = (props: any) => {
  return (
    <div className={`col-12 ${contactScss.contactItem}`}>
      <span>{props.contact.name}</span>
      <span>{props.contact.company}</span>
    </div>
  );
};

export default ContactItem;