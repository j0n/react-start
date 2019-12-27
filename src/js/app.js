import React, { Component, useContext } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './store.js';

const { API_URL } = process.env;

export default function App() {
  const { mainState } = useContext(store);
  const { content = '' } = mainState;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>root</h1>
          </Route>
          <Route exact path="/list">
            <h1>List</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
