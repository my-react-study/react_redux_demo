import axios from 'axios';
import {
  SET_ALL_USERS,
  SET_USERS_BY_USERNAME,
  DELETE_USER_BY_ID,
  ADD_USER,
  EDIT_USER
} from './actionTypes';
import servicePath from '../config/ApiUrl'

export const setAllUsers = users => {
  return {
    type: SET_ALL_USERS,
    users
  };
};

export const setUsersByUsername = users => {
  return {
    type: SET_USERS_BY_USERNAME,
    users
  };
}

export const deleteUserById = id => {
  return {
    type: DELETE_USER_BY_ID,
    id
  };
}

export const addUser = user => {
  return {
    type: ADD_USER,
    user
  };
}

export const editUser = user => {
  return {
    type: EDIT_USER,
    user
  };
}

export const getAllUserAction = () => {
  return dispatch => {
    axios({
      method: 'get',
      url: servicePath.getAllUser,
      header: { 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
      dispatch(setAllUsers(res.data.data.userList));
    })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getUsersByUsernameAction = (username) => {
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

export const addUserAction = (user) => {
  return (dispatch) => {
    axios({
      method: 'post',
      url: servicePath.addUser,
      data: user
    }).then((res) => {
      if (res.data.isSuccess) {
        user.id=res.data.insertId
        dispatch(addUser(user))
      }
    }).catch(error => {
      console.log(error);
    });
  }
}

export const editUserAction = (user) => {
  return (dispatch) => {
    axios({
      method: 'put',
      url: servicePath.editUser,
      data: user
    }).then((res) => {
      if (res.data.isSuccess) {
        dispatch(editUser(user))
      }
    }).catch(error => {
      console.log(error);
    });
  }
}

export const deleteUserAction = (id) => {
  return (dispatch) => {
      axios({
          method: 'delete',
          url: servicePath.deleteUser + id,
      }).then((res) => {
        if (res.data.isSuccess) {
          dispatch(deleteUserById(id))
      }
      }).catch(error => {
        console.log(error);
      });
  }
}