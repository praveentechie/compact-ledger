import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  let [ bool, setBool] = useState(false);
  const history = useHistory();

  const login = () => {
    setBool(true);
    history.push('/home');
  };
  
  return (
    <div id='content' className='form'>
      {bool && <img src='./src/static/img/logo.png' alt='logo' className='logo'/>}
      <div className='field-row'>
        <input id='userName' type='text' placeholder='Enter your name'/>
      </div>
      <div className='action-bar'>
        <button id='login' onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;