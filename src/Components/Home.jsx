import React from 'react';
import '../App.css';
import '../Styles/home.css'
// import { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap';

// import { ReactComponent as Cooking } from '../Illustrations/cooking.svg';
// import { ReactComponent as Leaf } from '../Illustrations/leaf.svg';
import { ReactComponent as Yummi } from '../Illustrations/frame2.svg';
import { ReactComponent as Books } from '../Illustrations/books.svg';

// import LogIn from './LogIn';
// import SignUp from './SignUp';

function Home() {


	// const [showLogIn, setShowLogIn] = useState(false); //Visar LoginModalen
	// const [showSignUp, setShowSignUp] = useState(false); //Visar SignUpModalen


	return (
		<div className="home-container">





			<div className="illustration-container">

				<Yummi className="illustration-yummi"></Yummi>
				<span className="illustration-text">
					<h3>Collect your favorite recipes online</h3>
					<h3>Create your own recipe book</h3>
					<h3>Share with others</h3>

				</span>
				<Books className="illustration-books"></Books>

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


			{/* Jämförde responsivitet mellan dessa */}
			<hr />

			{/* <div className="test-grid">
				<div className="box1">Box1</div>
				<div className="box2">Box2</div>
			</div>
			<hr/>
			<div className="test-grid2">
				<div className="box11">
					<Yummi></Yummi>
				</div>
				<div>
					<Books className="box22"></Books>
				</div>
			</div> */}


		</div>
	)
}

export default Home;