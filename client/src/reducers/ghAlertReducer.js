import { GH_SET_ALERT, GH_REMOVE_ALERT } from '../actions/types';

const initialState = null;
// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {
    const {type, payload} =action
    switch(type) {
        case GH_SET_ALERT:
            return payload;
        case GH_REMOVE_ALERT:
            return null;
        default:
            return state;
    }
}


