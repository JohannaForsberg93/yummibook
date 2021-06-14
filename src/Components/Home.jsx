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

			<Yummi className="illustration-yummi"></Yummi>
			<div className="illustration-text ">
				<h3 className="animate__animated animate__fadeInLeft">Collect your favorite recipes online</h3>
				<h3 className="animate__animated animate__fadeInRight">Create your own recipe book</h3>
				<h3 className="animate__animated animate__fadeInLeft">Share with others</h3>
			</div>
			<Books className="illustration-books"></Books>
		</div>
	)
}

export default Home;