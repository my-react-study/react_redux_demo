import {
  SET_ALL_USERS,
  SET_USERS_BY_USERNAME,
  DELETE_USER_BY_ID
} from '../actions/actionTypes';

const initialState = {
  users: []
};

const setAllUsers = (state, action) => {
  return { ...state, users: action.users };
};

const setUsersByUsername = (state, action) => {
  return { ...state, users: action.users };
};

const deleteUserById = (state, action) => {
  const users = state.users.filter(user => user.id !== action.id);
  return { ...state, users: users };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return setAllUsers(state, action);
    case SET_USERS_BY_USERNAME:
      return setUsersByUsername(state, action);
    case DELETE_USER_BY_ID:
      return deleteUserById(state, action);
    default:
      return state;
  }
};

export default userReducer;
