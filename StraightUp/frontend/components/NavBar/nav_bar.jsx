import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (guest) => (

  <div className="login-signup">
    <div>
      <Link className="login" to="/login">Log In</Link>
      <Link className="sign-up" to="/signup">Sign Up!</Link>
    </div>
    <div className="guest-button-container">
      <button className="guest-button" onClick={guest}>Guest Login</button>
    </div>
  </div>
);

const loggedInLinks = (currentUser, logout, guest) => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello, {currentUser.username}</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
);

const NavBar = ({ currentUser, logout, guest}) => (
  currentUser ? loggedInLinks(currentUser, logout) : sessionLinks(guest)
);

export default NavBar;
