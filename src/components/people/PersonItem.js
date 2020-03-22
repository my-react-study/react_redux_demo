import React, { Component } from 'react';


import {
  setSelectedPerson,
  removePerson
} from '../../actions/peopleActions';
import store from '../../store';

class PersonItem extends Component {

  render() {
    const person = this.props.person;
    return (
      <li>
        <a onClick={this.showDetails}>{person.name}</a>
        <br />
        <button onClick={this.remove}>Remove</button>
      </li>
    );
  };

  showDetails = () => {
    store.dispatch(setSelectedPerson(this.props.person));
    this.props.history.push(`/people/${this.props.index}`)
  }

  remove = () => {
    const index = this.props.index;
    store.dispatch(removePerson(index));
  }
}

export default PersonItem;
