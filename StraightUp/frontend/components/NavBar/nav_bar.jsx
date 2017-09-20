import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up!</Link>
  </nav>
);

const loggedInLinks = (currentUser, logout) => (
    <hgroup className="header-group">
      <h2 className="header-name">Hello, {currentUser.username}</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
);

const NavBar = ({ currentUser, logout }) => (
  currentUser ? loggedInLinks(currentUser, logout) : sessionLinks()
);

export default NavBar;
