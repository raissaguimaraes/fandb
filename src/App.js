import React, { Component } from 'react';
import {
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import Home from './pages/home';
/*import Episodios from './pages/episodios.js';
import Personagens from './pages/personagens.jsx';*/

class App extends Component {
  render () {
    return (
      <HashRouter>
          <Route exact="/">
            <Redirect to="home" />
          </Route>
          <Route path="/home" component={Home} />
        </HashRouter>
    );
  }
}

export default App;
/*<Route path="/episodios" component={Episodios} />
          <Route path="/personagens" component={Personagens} />
          <Route component={Home} />*/