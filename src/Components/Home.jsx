import React from 'react';
import '../App.css';
import '../Styles/home.css'
// import { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap';

import { ReactComponent as Cooking } from '../Illustrations/cooking.svg';
import { ReactComponent as Leaf } from '../Illustrations/leaf.svg';

// import LogIn from './LogIn';
// import SignUp from './SignUp';

function Home() {





	// const [showLogIn, setShowLogIn] = useState(false); //Visar LoginModalen
	// const [showSignUp, setShowSignUp] = useState(false); //Visar SignUpModalen


	return (
		<div className="home-container">
			<h1>Yummibook</h1>
			<div className="container">
				<div className="illustration-container">
					<Leaf className="box1"></Leaf>
					<Cooking className="box2" ></Cooking>
				</div>
			</div>
			{/* Log in and Sign upp buttons */}
			{/* <div>
				<button variant="info" className="btn btn-info btn-lg mr-4" onClick={() => setShowLogIn(true)}>Log in</button>
				<button className="btn btn-danger btn-lg" onClick={() => setShowSignUp(true)}>Sign up for free</button>
			</div>

			<LogIn
				show={showLogIn}
				onHide={() => setShowLogIn(false)}
			/>
			<SignUp
				show={showSignUp}
				onHide={() => setShowSignUp(false)}
			></SignUp>
			<br /> */}


		</div>
	)
}

export default Home;