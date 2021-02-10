import React from 'react';
import '../App.css';
import '../Styles/home.css'

import { ReactComponent as Yummi } from '../Illustrations/frame2.svg';
import { ReactComponent as Books } from '../Illustrations/books.svg';


// import LogIn from './LogIn';
// import SignUp from './SignUp';

function Home() {


	// const [showLogIn, setShowLogIn] = useState(false); //Visar LoginModalen
	// const [showSignUp, setShowSignUp] = useState(false); //Visar SignUpModalen


	return (
		<div className="home-container">


			{/* <h1 className="animate__animated animate__fadeInLeft">Testing testing</h1> */}


			{/* <div className="illustration-container"> */}

			<Yummi className="illustration-yummi"></Yummi>
			<div className="illustration-text ">
				{/* <div className="animate__animated animate__fadeInLeft" > */}
				<h3 className="animate__animated animate__fadeInLeft">Collect your favorite recipes online</h3>
				<h3 className="animate__animated animate__fadeInRight">Create your own recipe book</h3>
				<h3 className="animate__animated animate__fadeInLeft">Share with others</h3>

				{/* </div> */}

			</div>
			<Books className="illustration-books"></Books>

			{/* </div> */}




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