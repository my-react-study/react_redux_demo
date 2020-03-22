import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './components/Home';

import PeopleList from './components/people/PeopleList';
import PersonDetails from './components/people/PersonDetails';

const router = (
  <Router >

    <Route exact path='/' component={Home} />

    <Route path='/people' >
      <Route component={PeopleList} />
      <Route path=':id' component={PersonDetails} />
    </Route>

  </Router>
);

export default router;
