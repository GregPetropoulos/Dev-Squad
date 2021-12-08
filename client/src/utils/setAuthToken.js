import api from './api';
// store our JWT in LS and set axios headers if we do have a token

// function that takes in token if it exist will ad it to the headers aka global header to be sent with every request
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
