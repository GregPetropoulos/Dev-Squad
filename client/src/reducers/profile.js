// profile will make request when logged in and it will put all profile data into initialState array

import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
      case CLEAR_PROFILE:
        return {
          ...state,
          profile: null,
          repos: [],
          loading: false
        }
    default:
      return state;
  }
}

export default profileReducer;
