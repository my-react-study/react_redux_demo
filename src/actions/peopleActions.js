import axios from 'axios';
import {
  SET_PEOPLE,
  SET_SELECTED_PERSON,
  REMOVE_PERSON
} from './actionTypes';

export const setPeople = people => {
  return {
    type: SET_PEOPLE,
    people
  };
};

export const setSelectedPerson = selectedPerson => {
  return {
    type: SET_SELECTED_PERSON,
    selectedPerson
  };
};

export const removePerson = index => {
  return {
    type: REMOVE_PERSON,
    index
  };
};

export const getPeople = () => {
  return dispatch => {
    axios({
      method: 'get',
      url: 'http://swapi.co/api/people',
      header: { 'Access-Control-Allow-Origin': '*' }
    }).then(resp => {
      console.log(resp);
      dispatch(setPeople(resp.data.results));
    })
      .catch(error => {
        console.log(error);
      });
  };
};
