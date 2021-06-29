import React, { Component } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import client from './apollo/service';

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
      <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>,
      </>
    );
  }
}

export default App;