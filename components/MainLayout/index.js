import Header from '../Header';
import Toolbar from '../Toolbar';
import MobileToolbar from '../MobileToolbar';
import Breadcrumb from '../Breadcrumb';
import Footer from '../Footer';
import { useState, useEffect, useContext } from 'react';

import AuthContext from '../../context/authContext';

import styles from './mainlayout.module.css';

const Layout = (props) => {
  const authContext = useContext(AuthContext);
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('access_token')) {
      authContext.access_token = localStorage.getItem('access_token');
      authContext.refresh_token = localStorage.getItem('refresh_token');
      authContext.username = JSON.parse(window.atob(localStorage.getItem('access_token').split('.')[1]))?.userName;
    }
  }
  return (
    <>
      <div className={styles.wrap}>
        {/* <MobileToolbar /> */}
        <Header />
        <main>
          <Toolbar />
          <Breadcrumb path={props.path} />
          <div className={styles.main}>
            {props.children}
          </div>
          <Breadcrumb path={props.path} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;