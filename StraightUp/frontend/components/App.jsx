import React from 'react';
import NavBar from './NavBar/navbar_container';
import LoginFormContainer from '../components/LoginForm/login_form_container';
import SignUpFormContainer from '../components/SignUpForm/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Straight Up From AppJSX</h1>
      <NavBar />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
