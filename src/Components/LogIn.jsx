import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Modal } from 'react-bootstrap';

function LogIn(props) {

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
					<Form>
						<Form.Group >
							{/* <Form.Label>Username</Form.Label> */}
							<Form.Control type="text" placeholder="Username" />
						</Form.Group>

						<Form.Group>
							{/* <Form.Label>Password</Form.Label> */}
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit" onClick={props.onHide}>Submit</Button>
					<Button variant="danger" onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>



		</div>
	)


	{/* Modaler */ }
	// function LogInModal(props) {
	// 	return (
	// 		<Modal
	// 			{...props}
	// 			size="md"
	// 		>
	// 			{/* Tog bort closeButton (krysset) från Modal.Header */}
	// 			<Modal.Header>
	// 				<Modal.Title className="modal-title" id="contained-modal-title-vcenter">
	// 					<h3>Log in to your account</h3>
	// 				</Modal.Title>
	// 			</Modal.Header>
	// 			<Modal.Body>
	// 				{/* <h4>Centered Modal</h4> */}
	// 				<Form>
	// 					<Form.Group >
	// 						{/* <Form.Label>Username</Form.Label> */}
	// 						<Form.Control type="text" placeholder="Username" />
	// 					</Form.Group>

	// 					<Form.Group>
	// 						{/* <Form.Label>Password</Form.Label> */}
	// 						<Form.Control type="password" placeholder="Password" />
	// 					</Form.Group>
	// 				</Form>
	// 			</Modal.Body>
	// 			<Modal.Footer>
	// 				<Button type="submit" onClick={props.onHide}>Submit</Button>
	// 				<Button variant="danger" onClick={props.onHide}>Close</Button>
	// 			</Modal.Footer>
	// 		</Modal>
	// 	);
	// }

}

export default LogIn;