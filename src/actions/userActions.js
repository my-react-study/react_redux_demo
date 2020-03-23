import axios from 'axios';
import {
  SET_USERS,
  SET_USERS_BY_USERNAME
} from './actionTypes';
import servicePath from '../config/ApiUrl'

export const setUsers = users => {
  return {
    type: SET_USERS,
    users
  };
};

export const setUsersByUsername = users => {
  return {
    type: SET_USERS_BY_USERNAME,
    users
  };
}

export const getAllUserAction = () => {
  return dispatch => {
    axios({
      method: 'get',
      url: servicePath.getAllUser,
      header: { 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
      dispatch(setUsers(res.data.data.userList));
    })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getUsersByUsername = (username) => {
  return (dispatch) => {
    if (username === null || username === "") {
      dispatch(getAllUserAction())
    }
    else {
      axios.get(servicePath.getUsersByUsername + username)
        .then((res) => {
          dispatch(setUsersByUsername(res.data.data.userList))
        }).catch(error => {
          console.log(error);
        });
    }
  }
}