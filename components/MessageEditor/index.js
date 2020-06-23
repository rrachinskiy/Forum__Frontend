import React, { useContext } from 'react';
import AuthContext from '../../context/authContext';

export default ({ postId, addAnswer }) => {
  const message = React.createRef();
  const token = useContext(AuthContext).access_token;
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.api}/post/answer/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      referrerPolicy: 'no-referrer',
      cache: 'no-cache',
      body: JSON.stringify({
        text: message.current.value
      })
    });
    const json = await response.json();
    window && location.reload();
    console.log(json);
  }
  return (
    <>
      <style jsx>{`
        .message-editor {
          margin-top: 4px;
          border-radius: 3px;
          min-height: 280px;
          padding: 11px;
          background: white;
        }
        
        .message-form {
          display: grid;
        }

        .text-area {
          display: grid;
        }

        .text-area p {
          padding-bottom: 5px;
          padding-left: 4px;
        }

        .text-area span {
          font-size: 1.1rem;
          color: grey;
        }

        .text-area textarea {
          height: 260px;
          outline-color: #168cfa;
          outline-width: 6px;
        }

        .control-area button {
          min-height: 40px;
          border: 1px solid #4fcaff;
          border-radius: 3px;
          background-color: #4096ff;
          outline-color: #168cfa;
          outline-width: 6px;
          color: white;
          font-family: 'Georgia';
          font-size: 1.02rem;
          margin-top: 8px;
          cursor: pointer;
        }
      `}</style>
      <form className="message-editor" method="post" onSubmit={submitHandler}>
        <div className="text-area">
          <p><span>Додайте ваше повідомлення</span></p>
          <textarea ref={message}></textarea>
        </div>
        <div className="control-area">
          <button type="submit">Відправити</button>
        </div>
      </form>
    </>
  );
}