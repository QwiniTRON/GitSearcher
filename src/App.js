import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Alert from './components/Alert'
import ErrorBoundery from './hoc/ErrorBoundery'
import NotFound from './pages/NotFound'

const Navbar = React.lazy(() => import('./components/Navbar'))

function App() {

  const routes = [
    { path: "/", Component: Home, exact: true },
    { path: "/about", Component: About, exact: true },
    { path: "/profile/:id", Component: Profile, exact: true }
  ]

  const animatedRoutes = routes.map((route, i) => (
    <Route key={route.path + i} path={route.path} exact={route.exact}>
      {({ match }) => (
        <CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
          <div className="page"><route.Component /></div>
        </CSSTransition>
      )}
    </Route>
  ))

  // 
  const clonedRoutes = routes.map((route, i) => (
    <Route key={route.path + i} path={route.path} exact={route.exact} component={() => null} />
  ))


  return (
    <ErrorBoundery>
      <React.Suspense fallback={<div className="navbar-fallback"></div>}>
        <Navbar />
      </React.Suspense>
      <div className="container-fluid pt-4">
        <Alert text="alert" />

        {animatedRoutes}
        <Switch>
          {clonedRoutes}
          <Redirect to="/" />
        </Switch>
      </div>
    </ErrorBoundery>
  );
}

export default App;
