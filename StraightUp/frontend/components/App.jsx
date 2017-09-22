import React from 'react';
import NavBar from './NavBar/navbar_container';
import Home  from './Home/home';
import Dashboard from './Dashboard/dashboard';
import LoginFormContainer from '../components/LoginForm/login_form_container';
import DrinkIndexContainer from '../components/Drinks/drink_index_container';
import SignUpFormContainer from '../components/SignUpForm/signup_form_container';
import DashboardContainer from '../components/Dashboard/dashboard_container';
import ReviewIndexContainer from '../components/Reviews/review_index_container';
import ReviewFormContainer from '../components/ReviewForm/review_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

const App = () => (
  <div>
    <NavBar />
    <AuthRoute exact path="/" component={ Home}/>
    <ProtectedRoute path="/" component={Dashboard} />
    <ProtectedRoute path="/global" component={ReviewIndexContainer} />
    <ProtectedRoute path="/checkin" component={ReviewFormContainer} />

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />

  </div>
);

export default App;
