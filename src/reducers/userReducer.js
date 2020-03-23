import {
  SET_USERS,
  SET_USERS_BY_USERNAME
} from '../actions/actionTypes';

const initialState = {
  users: []
};

const setUsers = (state, action) => {
  return { ...state, users: action.users };
};

const setUsersByUsername = (state, action) => {
  return { ...state, users: action.users };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return setUsers(state, action);
    case SET_USERS_BY_USERNAME:
      return setUsersByUsername(state, action);
    default:
      return state;
  }
};

export default userReducer;
