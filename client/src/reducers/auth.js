import {
  REGISTER_SUCCESS,
  // REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  // LOGIN_FAIL,
  LOGIN_SUCCESS,
  DEMO_LOGIN_SUCCESS,
  LOGOUT,
  ACCOUNT_DELETED
} from '../actions/types';

// storing token in local storage
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isDemo:null,
  loading: true,
  user: null
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
      case DEMO_LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          isDemo:true,
          loading: false
        };
    case ACCOUNT_DELETED:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isDemo:false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}
export default authReducer;
