import {
  SET_USERS,
} from '../actions/actionTypes';

const initialState = {
  users: []
};

const setUsers = (state, action) => {
  return { ...state, users: action.users };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return setUsers(state, action);
    default:
      return state;
  }
};

export default userReducer;
