import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (guest) => (

  <div className="login-signup">
    <div className="login-signup-right">
      <Link className="login" to="/login">LOG IN</Link>
      <Link className="sign-up" to="/signup">SIGN UP</Link>
    </div>
    <div className="straightup">
      <h1>Straight Up</h1>
    </div>
    <div className="guest-button-container">
      <button className="guest-button" onClick={guest}>GUEST LOGIN</button>
    </div>
  </div>
);

const loggedInLinks = (currentUser, logout, guest) => (

    <hgroup className="header-group">
      <h2 className="header-name">Welcome {currentUser.extract.username}</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
);

const NavBar = ({ currentUser, logout, guest}) => (
  currentUser ? loggedInLinks(currentUser, logout) : sessionLinks(guest)
);

export default NavBar;
