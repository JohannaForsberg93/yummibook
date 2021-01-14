import React from 'react';
import '../Styles/public.css';
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function PublicBooks() {




	return (
		<div className="container">
			<h1>All public books</h1>
			<br />
			{/* <Button variant="primary" onClick={() => setLogInModal(true)}>
				Log in button
      </Button> */}

			{/* <MyVerticallyCenteredModal
				show={logInModal}
				onHide={() => setLogInModal(false)}
			/> */}

		</div>
	)
}

export default PublicBooks;