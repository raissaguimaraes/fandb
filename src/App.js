import React, { Component } from 'react';
import Home from './pages/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


class App extends Component {
  render () {
    return (
      <> 
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;