import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Star Wars info</p>
        <Link to='people'>People</Link>
      </div>
    );
  }
}

export default Home;
