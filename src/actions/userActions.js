import axios from 'axios';
import {
  SET_USERS
} from './actionTypes';


export const setUsers = users => {
  return {
    type: SET_USERS,
    users
  };
};

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
