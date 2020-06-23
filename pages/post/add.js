import React, { useContext } from 'react';
import AuthContext from '../../context/authContext';
import PostsContext from '../../context/postsContext';

export default ({ sectionId }) => {
  const postTitleElRef = React.createRef();
  const postMessageElRef = React.createRef();

  const authContext = useContext(AuthContext);
  const postsContext = useContext(PostsContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.api}/post/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authContext.access_token}`
      },
      referrerPolicy: 'no-referrer',
      cache: 'no-cache',
      body: JSON.stringify({
        title: postTitleElRef.current.value,
        text: postMessageElRef.current.value,
        section_id: postsContext.currentSection
      })
    });
    const json = await response.json();
    console.log(json);
    if (typeof window !== 'undefined') document.location = `/section/${postsContext.currentSection}`;
  }

  return (
    <>
      <style jsx>{`
        .add-post-page {
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
        
        .post-title {
          width: 400px;
          height: 30px;
        }

        .post-message {
          resize: none;
          width: 800px;
          height: 200px;
          margin-top: 13px;
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
      <div className="add-post-page">
        <form method="post" onSubmit={submitHandler}>
          <input type="text" placeholder="Назва теми" className="post-title" ref={postTitleElRef} />
          <br />
          <textarea className="post-message" ref={postMessageElRef}></textarea>
          <br />
          <button type="submit">Створити тему</button>
        </form>
      </div>
    </>
  );
}