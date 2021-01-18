import React from 'react';
import '../Styles/signup.css';
import Form from 'react-bootstrap/Form'
import { Button, Modal, Col } from 'react-bootstrap';


function SignUp(props) {

	return (
		<div>
			<Modal
				{...props}
				size="md"
			>
				<Modal.Header>
					<Modal.Title className="modal-title" id="contained-modal-title-vcenter">
						<h3>Sign up to Yummibook</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Row>
							<Form.Group as={Col} controlId="FirstName">
								<Form.Control type="text" placeholder="First name" />
							</Form.Group>

							<Form.Group as={Col} controlId="LastName">
								<Form.Control type="text" placeholder="Last name" />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="Username">
								<Form.Control type="text" placeholder="Enter a Username" />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="Password">
								<Form.Control type="password" placeholder="Enter a password" />
							</Form.Group>
						</Form.Row>
						<Form.Group id="formGridCheckbox">
							<Form.Check type="checkbox" label="I'm a nice person" />
						</Form.Group>
					</Form>


				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" type="submit" onClick={props.onHide}>Create Account</Button>
					<Button variant="danger" onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>

		</div>
	)
}

export default SignUp;