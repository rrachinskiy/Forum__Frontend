import React from 'react';

export default React.createContext({
  loaded: false,
  access_token: null,
  refresh_token: null,
  username: null,
  login: (username) => { },
  logout: () => { }
});