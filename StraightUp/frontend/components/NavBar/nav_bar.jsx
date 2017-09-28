import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const sessionLinks = guest => (
	<div>
		<div className="login-signup">
			<div className="login-signup-right">
				<Link className="login" to="/login">
					LOG IN
				</Link>
				<Link className="sign-up" to="/signup">
					SIGN UP
				</Link>
			</div>

			<div className="guest-button-container">
				<button className="guest-button" onClick={guest}>
					GUEST LOGIN
				</button>
			</div>
		</div>
	</div>
);

const loggedInLinks = (currentUser, logout, guest) => (
	<hgroup className="header-group">
		<button className="logout-button" onClick={logout}>
			LOG OUT
		</button>
		<NavLink className="check-in" to="/checkin" activeClassName="is-active">
			CHECK IN
		</NavLink>
		<NavLink className="global" to="/the-bar" activeClassName="is-active">
			THE BAR
		</NavLink>
		<NavLink
			className="header-name"
			to="/dashboard"
			activeClassName="user-is-active"
		>
			Welcome {currentUser.username}
		</NavLink>
	</hgroup>
);

const NavBar = ({ currentUser, logout, guest }) =>
	currentUser ? loggedInLinks(currentUser, logout) : sessionLinks(guest);

export default NavBar;
