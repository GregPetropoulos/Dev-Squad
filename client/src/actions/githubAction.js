import axios from 'axios';
import {
  GH_SEARCH_USERS,
  GH_SET_LOADING,
  GH_CLEAR_USERS,
  GH_GET_USER,
  GH_GET_REPOS,
  GH_ERROR
} from './types';

let githubClientId;
let githubClientSecret;
//if not in production pass the environment variables
if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_SECRET_ID;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_SECRET_ID;
}

export const searchUsers = (text) => async (dispatch) => {
  // setLoading();
  try {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GH_SEARCH_USERS,
      payload: res.data.items
    });
  } catch (err) {
    dispatch({
      type: GH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get User
export const getUser = (username) => async (dispatch) => {
  // setLoading();
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GH_GET_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get Repos
export const getUserRepos = (username) => async (dispatch) => {
  // setLoading();
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GH_GET_REPOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Clear Users
export const clearUsers = async (dispatch) => {
  dispatch({ type: GH_CLEAR_USERS })};

//Set Loading
export const setLoading = async (dispatch) => {
  dispatch({ type: GH_SET_LOADING })};
