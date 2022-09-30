

import { GH_SET_ALERT, GH_REMOVE_ALERT, GH_ERROR} from './types';

//SET ALERT
export const setAlert = (msg, type) => async (dispatch) => {
  try {
    dispatch({
      type: GH_SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: GH_REMOVE_ALERT }), 5437);
  } catch (err) {
    dispatch({
        type: GH_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });

  }
};

//REMOVE ALERT
