import Link from 'next/link';
import { useContext, useEffect, useState } from 'react'

import AuthContext from '../../context/authContext';

const Toolbar = (props) => {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState('');

  const logoutHandler = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
      document.location = '/';
    }
  }

  authContext.login = (username) => {
    setUsername(username);
  }
  useEffect(() => {
    console.log(authContext);
    setUsername(authContext.username);
  }, [])
  return (
    <>
      <style jsx>{`
        .toolBar {
          font-family: 'Roboto', sans-serif;
          font-size: 0.92rem;
          background: linear-gradient(rgba(30, 30, 30, 0.8) 0%, rgba(30, 30, 30, 0.9) 100%);
          border: 1px solid #090A0A;
          border-radius: 5px;
          margin-top: 11px;
          box-shadow: 0 0 5px rgba(0,0,0,0.5);
          height: 38px;
          overflow: hidden;
      }
      
      // @media (max-width: 992px) {
      //     .toolBar {
      //         display: none;
      //     }
      // }
      
      .login_buttons {
          display: block;
          height: 100%;
      }
      
      .profile-element {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 250px;
          height: 100%;
          text-decoration: none;
          float: left;
          text-align: center;
          border-right: 1px solid #484B4C;
          cursor: pointer;
      }
      
      .profile-element:hover {
          background: linear-gradient(#1b1b1b, #292929, #1b1b1b);
      }

      .profile-element span {
        color: #EAEAEA;
      }
      
      .register_link {
          display: block;
          width: 120px;
          height: 100%;
          text-decoration: none;
          float: left;
          text-align: center;
          border-right: 1px solid #484B4C;
      }

        .username {
          color: white;
          font-size: 1.02rem;
        } 
      `}</style>
      <div className="toolBar">
        {username ?
          <>
            <Link href='/profile/[username]' as={`/profile/${authContext.username}`}>
              <a className="profile-element">
                <span className="username">{username}</span>
              </a>
            </Link>
            <a className="profile-element" onClick={logoutHandler}>
              <span className="username">Вийти</span>
            </a>
          </>
          :
          <div className="login_buttons">
            <Link href="/auth">
              <a className="profile-element">
                <span>
                  Вже зареєстровані? Увійти
                </span>
              </a>
            </Link>
            <Link href="/register">
              <a className="profile-element">
                <span>
                  Реєстрація
                </span>
              </a>
            </Link>
          </div>
        }
      </div>
    </>
  )
}

export default Toolbar;