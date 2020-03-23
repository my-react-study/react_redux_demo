import axios from 'axios';
import {
  SET_USERS,
  SET_USERS_BY_USERNAME
} from './actionTypes';


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
      url: 'http://127.0.0.1:7001/admin/getAllUser',
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
      axios.get('http://127.0.0.1:7001/admin/getUsersByUsername/' + username)
        .then((res) => {
          dispatch(setUsersByUsername(res.data.data.userList))
        }).catch(error => {
          console.log(error);
        });
    }
  }
}