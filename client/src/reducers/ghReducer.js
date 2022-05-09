import {
    GH_SEARCH_USERS,
    GH_SET_LOADING,
    GH_CLEAR_USERS,
    GH_GET_USER,
    GH_GET_REPOS,
    GH_ERROR
  } from '../actions/types';

  const initialState = {
    ghusers: [],
    ghuser: {},
    ghrepos: [],
    ghloading: false,
    gherror:{}
  };

  
  // eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action)=>{
  
  switch (action.type) {
    case GH_SEARCH_USERS:
      console.log('search users payload',state.users)
      return {
        ...state,
        users: action.payload,
        loading: false
      };
      case GH_GET_USER:
        console.log('get users payload',state.user)
        
        return {
          ...state,
          user: action.payload,
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
                repos:action.payload,
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
              error: action.payload,
              loading: false
            };
      default:
        return state;
    }
  };
