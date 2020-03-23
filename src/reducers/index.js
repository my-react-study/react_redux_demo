import { combineReducers } from 'redux';

import peopleReducer from './peopleReducer';
import userReducer from './userReducer';

export default combineReducers({
  peopleState: peopleReducer,
  userState: userReducer
});
