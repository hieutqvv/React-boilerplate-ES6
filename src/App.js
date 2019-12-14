import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

//container
const DefaultLayout = Loadable({
  loader: () => import('./container/Layouts/Layout'),
  loading
})

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
