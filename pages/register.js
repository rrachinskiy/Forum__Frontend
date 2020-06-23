import React from 'react';

export default (props) => {
  const emailRef = React.createRef();
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const formHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.api}/profile/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer',
      cache: 'no-cache',
      body: JSON.stringify({
        email: emailRef.current.value,
        userName: usernameRef.current.value,
        password: passwordRef.current.value
      })
    });
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
              <label htmlFor="login-input">Email</label>
              <input className="auth-input" id="login-input" type="email" placeholder="Введіть Email" ref={emailRef}></input>
              <label htmlFor="login-input">Логін</label>
              <input className="auth-input" id="login-input" type="text" placeholder="Введіть логін" ref={usernameRef}></input>
              <label htmlFor="pass-input">Пароль</label>
              <input className="auth-input" id="pass-input" type="password" placeholder="Введіть пароль" ref={passwordRef}></input>
            </div>
            <div className="controls-block">
              <button type="submit">Зареєструватись</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}