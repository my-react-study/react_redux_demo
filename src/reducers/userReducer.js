import {
  SET_ALL_USERS,
  SET_USERS_BY_USERNAME,
  DELETE_USER_BY_ID,
  ADD_USER,
  EDIT_USER
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

const addUser = (state, action) => {
  return { ...state, users: state.users.concat(action.user) };
};

const editUser = (state, action) => {
  const userInAction = action.user;
  const users = state.users.map(user => user.id === userInAction.id ? ({ ...user, username: userInAction.username, age: userInAction.age, address: userInAction.address }) : user);
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
    case ADD_USER:
      return addUser(state, action);
    case EDIT_USER:
      return editUser(state, action);
    default:
      return state;
  }
};

export default userReducer;
