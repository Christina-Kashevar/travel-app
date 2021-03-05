import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Country from './components/Country';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country">
            <Country />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
