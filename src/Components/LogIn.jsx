import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Modal, FormControl, FormCheck } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function LogIn(props) {

	const [value, setValue] = useState({
		username: "",
		password: "",

	});

	function handleSubmit(e) {

		console.log("Inuti handleSubmit", value)

		axios.post('/login', { username: value.username, password: value.password })
			.then((response) => {
				console.log("Detta är response", response)
			})



		e.preventDefault();
		props.onHide();

		// e.target.reset();
	}
	function handleChange(e) {
		setValue({ ...value, [e.currentTarget.name]: e.currentTarget.value });
	}
	function test() {
		console.log("Funkar ens denna knappen??")
	}

	return (
		<div>

			<Modal
				{...props}
				size="md"
			>
				{/* Tog bort closeButton (krysset) från Modal.Header */}
				<Modal.Header>
					<Modal.Title className="modal-title" id="contained-modal-title-vcenter">
						<h3>Log in to your account</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <h4>Centered Modal</h4> */}
					<Form >
						<Form.Group required >
							{/* <Form.Label>Username</Form.Label> */}
							<Form.Control
								type="text"
								placeholder="Username"
								id="username"
								name="username"
								value={value.username}
								onChange={handleChange}
								className="form-control"
							/>
							<Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							{/* <Form.Label>Password</Form.Label> */}
							<Form.Control
								type="password"
								placeholder="Password"
								id="password"
								name="password"
								value={value.password}
								onChange={handleChange}
								className="form-control"

							/>
							{/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}

						</Form.Group>
					</Form>
					{/* <Form.Control.Feedback type="invalid">
						Error.
            		</Form.Control.Feedback> */}
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" onClick={handleSubmit}>Submit</Button>
					<Button variant="danger" onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>

			{/* {(value.username != "") ? (
				<div>
					<h2>Welcome back, <span>{value.username}</span></h2>
				</div>) : "Inte inloggad"} */}
		</div>
	)

}

export default LogIn;