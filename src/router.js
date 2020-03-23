import React from 'react';

import { Router, Route } from 'react-router-dom'
import history from './history';

import Home from './components/Home';

import PeopleList from './components/people/PeopleList';
import PersonDetails from './components/people/PersonDetails';
import UserList from './components/user/UserList';

const router = (
  <Router history={history}>
    <Route exact path='/' component={Home} />
    <Route exact path='/people' component={PeopleList} />
    <Route path='/people/:id' component={PersonDetails} />
    <Route path='/user' component={UserList} />
  </Router>
);

export default router;
