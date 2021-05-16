import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import HomePage from './home/HomePage';
import './styles/core.global.scss';
import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
      <Redirect from="" to="/" />
    </Router>
  );
}
