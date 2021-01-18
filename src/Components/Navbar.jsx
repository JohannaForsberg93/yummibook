import React from 'react';
import '../App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import { useState } from 'react'


function Nav({ tokenState }) {
	console.log("Värdet av tokenState", tokenState)

	const token = tokenState
	console.log("Detta är const token", token)
	const [showLogIn, setShowLogIn] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);

	const [loggedIn, setLoggedIn] = useState(false);

	function logInFunction() {
		if (token == true) {
			setShowLogIn(true);
			// setLoggedIn(true)
			console.log("Inuti logInFunc, värdet av token", token)
		}
	}

	return (
		<div>
			<nav className=" navbar navbar-expand-sm">
				<a className="navbar-brand" href="/home">Yummibook</a>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a href="/home" className="nav-link">Home</a>
					</li>
					<li className="nav-item">
						<a href="/new" className="nav-link">Create new</a>
					</li>
					<li className="nav-item">
						<a href="/my-books" className="nav-link">My books</a>
					</li>
					<li className="nav-item">
						<a href="public-books" className="nav-link">Public books</a>
					</li>
				</ul>

				<div>
					{token ?
						<button className="btn btn-info mr-1" onClick={logInFunction}>Log in </button> :
						<button className="btn btn-danger mr-1" >Log out</button>}
				</div>


				<button className="btn btn-warning" onClick={() => setShowSignUp(true)}>Sign up</button>

				<LogIn
					show={showLogIn && token}
					onHide={() => setShowLogIn(false)}
				/>
				<SignUp
					show={showSignUp}
					onHide={() => setShowSignUp(false)}
				></SignUp>

			</nav>
		</div>

	)
}

export default Nav;