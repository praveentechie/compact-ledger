import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AppUser from '../domain/AppUser';
import { readFile, writeToFile } from '../utils/systemUtils';

import loginStyle from './_login.scss';

const _loginUtils = {
  _validateUser() {
    // TODO:1: validate user
  },

  async loadUser() {
    return JSON.parse(await readFile('user.json') || 'null');
  },

  async loginUser(user: AppUser) {
    this._validateUser();
    await writeToFile('user.json', JSON.stringify(user));
  }
};

const LoginPage = () => {
  const [ userName, setUserName ] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function loadUser() {
      let user = (await _loginUtils.loadUser()) as AppUser;
      if (user && user.userName) {
        setUserName(user.userName);
        login();
      }  
    }
    loadUser();
  }, []);

  const login = async () => {
    await _loginUtils.loginUser(new AppUser(userName));
    history.push('/home');
  };

  const updateForm = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    switch(field) {
      case 'userName':
        setUserName(event.target.value);
    }
  };
  
  return (
    <div className={`${loginStyle.loginPage}`}>
      <Container fluid>
        <img src='./src/static/img/logo.png' alt='logo' className='logo'/>
        <Row className='row-margin'>
          <Col xs={12}>
            <Form.Control
              name='userName'
              placeholder='Enter your name'
              value={userName}
              onChange={updateForm.bind(this, 'userName')}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='text-right'>
            <Button variant='primary' onClick={login}>Login</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;