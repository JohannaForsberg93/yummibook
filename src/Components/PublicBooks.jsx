import React from 'react';
import '../Styles/public.css';
// import Form from 'react-bootstrap/Form'
// import { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap';

const PublicBooks = props => {

	// const {
	// 	cancel,
	// 	errors,
	// 	submit,
	// 	submitButtonText,
	// 	// elements,
	// 	passwordErrors
	// } = props;

	// function handleSubmit(event) {
	// 	event.preventDefault();

	// 	submit();
	// }
	// function handleCancel(event) {
	// 	event.preventDefault();
	// 	cancel();
	// }
	// function ErrorsDisplay({ errors }) {
	// 	let errorsDisplay = null;

	// 	if (errors.length) {
	// 		errorsDisplay = (
	// 			<React.Fragment>
	// 				<span>Errors:</span>
	// 				<p>{errors.map((error, i) => (<li key={i}>{error}</li>))}</p>
	// 			</React.Fragment>
	// 		)
	// 	}
	// 	return errorsDisplay;

	// }


	return (
		<div className="container">
			<h1>All public books</h1>
			<br />
			{/* <>
				<ErrorsDisplay errors={errors} passwordErrors={passwordErrors}></ErrorsDisplay>
				<Form onSubmit={handleSubmit}>


					<Button className="mr-1" variant="primary" type="submit">{submitButtonText}</Button>
					<Button className="mr-1" variant="secondary" onClick={handleCancel}>Cancel</Button>
				</Form>
			</> */}
		</div>
	)
}

export default PublicBooks;