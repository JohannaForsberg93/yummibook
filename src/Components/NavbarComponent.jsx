import React from 'react';
import '../Styles/navbar.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


function NavbarComponent({ isLoggedIn }) {

	const userState = isLoggedIn;
	console.log("Värdet av userState", userState)

	const [showLogIn, setShowLogIn] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);

	const [loggedIn, setLoggedIn] = useState(false);

	function logInFunction() {
		if (userState == true) {
			setShowLogIn(true);
			// setLoggedIn(true)
			console.log("Inuti logInFunc, värdet av login", loggedIn)
		}
	}

	return (
		<div>

			<Navbar>
				<Navbar.Brand href="/home">Yummibook</Navbar.Brand>
				<Nav className="mr-auto">
					<NavLink activeClassName="active" to='/home'>Home</NavLink>
					<NavLink activeClassName="active" to='/books/new'>Create new</NavLink>
					<NavLink activeClassName="active" to='/books/all'>My books</NavLink>
					<NavLink activeClassName="active" to='/books/recipes'>Recipes</NavLink>
				</Nav>
				<div>
					{userState ?
						<button className="btn btn-info mr-1" onClick={logInFunction}>Log in </button> :
						<button className="btn btn-danger mr-1" >Log out</button>}
				</div>
				<button className="btn btn-warning" onClick={() => setShowSignUp(true)}>Sign up</button>

				<LogIn
					show={showLogIn && userState}
					onHide={() => setShowLogIn(false)}
				/>
				<SignUp
					show={showSignUp}
					onHide={() => setShowSignUp(false)}
				></SignUp>
			</Navbar>

		</div>

	)
}

export default NavbarComponent;