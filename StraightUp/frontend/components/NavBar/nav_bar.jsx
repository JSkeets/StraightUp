import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (guest) => (
<div>
  <div className="login-signup">
    <div className="login-signup-right">
      <Link className="login" to="/login">LOG IN</Link>
      <Link className="sign-up" to="/signup">SIGN UP</Link>
    </div>



    <div className="guest-button-container">
      <button className="guest-button" onClick={guest}>GUEST LOGIN</button>
    </div>
  </div>
  <div className="straightup">
    <h1>Straight Up</h1>
    <p id="motto">Where the World comes to rate cocktails</p>
  </div>
  </div>
);

const loggedInLinks = (currentUser, logout, guest) => (

    <hgroup className="header-group">
      <button className="logout-button" onClick={logout}>LOG OUT</button>
      <Link className="check-in" to="/checkin">CHECK IN</Link>
      <Link className="top-rated" to="/toprated">TOP RATED</Link>
      <Link className="global" to="/global">WORLDLY</Link>
      <h2 className="header-name">Welcome {currentUser.extract.username}</h2>
    </hgroup>
);

const NavBar = ({ currentUser, logout, guest}) => (
  currentUser ? loggedInLinks(currentUser, logout) : sessionLinks(guest)
);

export default NavBar;
