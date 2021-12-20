import {
    GH_SEARCH_USERS,
    GH_SET_LOADING,
    GH_CLEAR_USERS,
    GH_GET_USER,
    GH_GET_REPOS,
    GH_ERROR
  } from '../actions/types';

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    error:{}
  };

  // eslint-disable-next-line
function ghReducer(state=initialState, action) {
  const { type, payload } = action;

    switch (type) {
      case GH_SEARCH_USERS:
        return {
          ...state,
          users: payload,
          loading: false
        };
      case GH_GET_USER:
        return {
          ...state,
          user: payload,
          loading: false
        };
      case GH_CLEAR_USERS:
        return {
          ...state,
          users: [],
          loading: false
        };
        case GH_GET_REPOS:
            return {
                ...state,
                repos:payload,
                loading: false
            }
      case GH_SET_LOADING:
        return {
          ...state,
          loading: true
        };
        case GH_ERROR:
            return {
              ...state,
              error: payload,
              loading: false
            };
      default:
        return state;
    }
  };
  export default ghReducer