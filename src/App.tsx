import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import './styles/core.global.scss';
import './App.global.css';
import AppContainer from './AppContainer';
import NavBar from './shared/NavBar';

export default function App() {
  return (
    <Router>
      <NavBar/>
      <div className='container'>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <AppContainer/>
        </Switch>
        <Redirect from="" to="/" />
      </div>
    </Router>
  );
}
