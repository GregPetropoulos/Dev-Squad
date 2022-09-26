import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import ghReducer from './ghReducer'
import ghAlertReducer from './ghAlertReducer';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  ghFinder:ghReducer,
  ghAlertReducer
});
