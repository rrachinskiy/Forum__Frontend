import React, { useContext } from 'react';

import AuthContext from '../../context/authContext';

export default () => {
  const authContext = useContext(AuthContext);

  const
    signatureRef = React.createRef(),
    passwordRef = React.createRef(),
    firstNameRef = React.createRef(),
    secondNameRef = React.createRef(),
    idImageRef = React.createRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.api}/profile/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authContext.access_token}`
      },
      referrerPolicy: 'no-referrer',
      cache: 'no-cache',
      body: JSON.stringify({
        password: passwordRef.current.value,
        firstName: firstNameRef.current.value,
        secondName: secondNameRef.current.value,
        profileImage: idImageRef.current.value,
        signature: signatureRef.current.value
      })
    });

    const json = await response.json();
    console.log(json);
  }

  return (
    <>
      <style jsx>{`
        .edit-profile-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          background: #fcfcfc;
          margin-top: 9px;
          border-radius: 3px;
        }

        form {
          width: 90%;
          height: 300px;
          align-items: center;
          justify-content: center;
        }
        
        .input-box {
          width: 400px;
          height: 30px;
          margin-top: 7px;
        }

        button {
          height: 40px;
          width: 140px;
          margin-right: 40px;
          margin-top: 10px;
          background-color: #47ed95;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline-color: #0be068;
        }
      `}</style>
      <div className="edit-profile-page">
        <form method="post" onSubmit={submitHandler}>
          <input type="text" placeholder="Пароль" className="input-box" ref={passwordRef} />
          <br />
          <input type="text" placeholder="Ім'я" className="input-box" ref={firstNameRef} />
          <br />
          <input type="text" placeholder="Прізвище" className="input-box" ref={secondNameRef} />
          <br />
          <input type="text" placeholder="ID зображення" className="input-box" ref={idImageRef} />
          <br />
          <input type="text" placeholder="Підпис користувача" className="input-box" ref={signatureRef} />
          <br />
          <button type="submit">Зберегти зміни</button>
        </form>
      </div>
    </>
  )
}