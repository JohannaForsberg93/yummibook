import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Modal } from 'react-bootstrap';
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
	}
	function handleChange(e) {
		setValue({ ...value, [e.currentTarget.name]: e.currentTarget.value });
	}

	return (
		<div>

			<Modal
				{...props}
				size="md"
			>
				<Modal.Header>
					<Modal.Title className="modal-title" id="contained-modal-title-vcenter">
						<h3>Log in to your account</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form >
						<Form.Group required >
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
							<Form.Control
								type="password"
								placeholder="Password"
								id="password"
								name="password"
								value={value.password}
								onChange={handleChange}
								className="form-control"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" onClick={handleSubmit}>Submit</Button>
					<Button variant="danger" onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)

}

export default LogIn;