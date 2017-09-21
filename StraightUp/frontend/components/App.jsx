import React from 'react';
import NavBar from './NavBar/navbar_container';
import LoginFormContainer from '../components/LoginForm/login_form_container';
import DrinkIndexContainer from '../components/Drinks/drink_index_container';
import SignUpFormContainer from '../components/SignUpForm/signup_form_container';
import DashboardContainer from '../components/Dashboard/dashboard_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
  <div>

    <ProtectedRoute path="/dashboard" component={NavBar} />
    <ProtectedRoute path="/dashboard" component={DrinkIndexContainer} />
    <Route exact path="/" component={NavBar} />

    <AuthRoute path="/login" component={NavBar} />
    <AuthRoute path="/login" component={LoginFormContainer} />

      <AuthRoute path="/signup" component={NavBar} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />

  </div>
);

export default App;

// <ProtectedRoute path="/" component={DrinkIndexContainer} />
// <Route path="/dashboard" component={DashboardContainer} />
