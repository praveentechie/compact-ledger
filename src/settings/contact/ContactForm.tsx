import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Contact from "../../domain/contact/Contact";
import MultipleInput from '../../shared/form/MultipleInput';

import styles from './contact.scss';

const defaultContact = new Contact(null, '');

const ContactForm = () => {
  const [contactForm, setForm] = useState(defaultContact);

  return (
    <div className={`${styles.contactForm} col-8`}>
      <Form className={`form col-12 p-0`}>
        <Form.Group as={Row} className={``}>
          <Form.Label column sm={3}>Name</Form.Label>
          <Col sm={9}>
            <Form.Control type='text' name='name'
              value={contactForm.name}
              onChange={() => {}}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className={``}>
          <Form.Label column sm={3}>Company</Form.Label>
          <Col sm={9}>
            <Form.Control type='text' name='company'
              value={contactForm.company}
              onChange={() => {}}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className={``}>
          <Form.Label column sm={3}>Company</Form.Label>
          <Col sm={9}>
            <Form.Control type='tel' name='company'
              value={contactForm.company}
              onChange={() => {}}
            />
          </Col>
        </Form.Group>
        <MultipleInput/>
      </Form>
    </div>
  );
};

export default ContactForm;