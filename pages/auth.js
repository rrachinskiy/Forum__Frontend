import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router'

import AuthContext from '../context/authContext';

export default (props) => {

  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState('');
  useEffect(() => {
    setUsername(authContext.username);
    if (window && authContext.username) Router.push('/');
  })
  const [loggedIn, setLoggedIn] = useState(false);
  //const [username, setUsername] = useState('');

  const usernameInput = React.createRef();
  const passwordInput = React.createRef();

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer',
        cache: 'no-cache',
        body: JSON.stringify({
          username: usernameInput.current.value,
          password: passwordInput.current.value
        })
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) throw new Error('Failed to login')
      localStorage.setItem('access_token', json.access_token);
      localStorage.setItem('refresh_token', json.refresh_token);
      setLoggedIn(true);
      console.log(JSON.parse(window.atob(localStorage.getItem('access_token').split('.')[1]))?.userName)
      authContext.username = JSON.parse(window.atob(localStorage.getItem('access_token').split('.')[1]))?.userName;
      authContext.login(authContext.username);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <style jsx>{`
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          background: #fcfcfc;
          margin-top: 9px;
          border-radius: 3px;
        }

        form {
          display: grid;
          grid-template-rows: 1fr 1fr;
        }

        .input-block {
          display: grid;
          grid-template-columns: 1fr 10fr;
          grid-row-gap: 10px;
        }

        label {
          text-align: right;
        }

        .auth-input {
          margin-left: 6px;
        }

        .layout {
          width: 50%;
        }
        
      `}</style>
      <div className="login-page">
        <div className="layout">
          <form method="post" onSubmit={formHandler}>
            <div className="input-block">
              <label htmlFor="login-input">Логін</label>
              <input className="auth-input" id="login-input" type="text" placeholder="Введіть логін" ref={usernameInput}></input>
              <label htmlFor="pass-input">Пароль</label>
              <input className="auth-input" id="pass-input" type="password" placeholder="Введіть пароль" ref={passwordInput}></input>
            </div>
            <div className="controls-block">
              <button type="submit">Увійти</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}