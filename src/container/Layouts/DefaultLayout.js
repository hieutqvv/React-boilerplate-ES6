import React, {Component, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// routes config
import routes from '../../routes';
import { navigation } from './DefaultNavigation';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loading() {
    return (
      <div className="animated fadeIn pt-1 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
      </div>
    );
  };

  render() {
    return (  
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader/>
            <AppSidebarForm/>
            <Suspense>
              <AppSidebarNav navConfig={{items: navigation()}} {...this.props} />
            </Suspense>
            <AppSidebarFooter/>
            <AppSidebarMinimizer/>
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )}/>
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard"/>
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter/>
          </Suspense>
        </AppFooter>
      </div>  
    );
  }
}

export default DefaultLayoutContainer