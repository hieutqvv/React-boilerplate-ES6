import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './container/Layouts/DefaultLayout';
import './App.scss';

class App extends Component {
  render() {
    return (  
      <HashRouter>
        <Switch>
          <Route path='/' name='home' component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
