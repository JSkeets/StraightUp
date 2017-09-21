import React from 'react';
import NavBar from './NavBar/navbar_container';
import LoginFormContainer from '../components/LoginForm/login_form_container';
import DrinkIndexContainer from '../components/Drinks/drink_index_container';
import SignUpFormContainer from '../components/SignUpForm/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Route path="/api/drinks" component={DrinkIndexContainer} />
  <Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </Switch>
  </div>
);

export default App;
