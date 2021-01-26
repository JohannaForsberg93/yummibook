import React from 'react';
import { useState } from 'react';
import '../Styles/mybooks.css';
import { Card, CardDeck, Button, Container } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

function MyBooks() {

	const [apiData, setApiData] = useState([]);

	function getBooks() {
		axios.get('http://localhost:4000/books/all')
			.then((response) => {
				console.log("detta är response.data", response.data)
				setApiData(response.data)

			})
			.catch((error) => {
				console.log("något gick fel", error)
			})
	}

	// console.log("Detta är apiData", apiData)

	return (
		<div className="mybooks-container">
			<h1>My Yummibooks</h1>
			<button onClick={getBooks}>Show books</button>

			<CardDeck>
				{apiData.map((book, index) => {
					const { title, description } = book; return (

						<CardDeck key={index} className="card-deck">

							<Card>
								<Card.Img variant="top" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
								<Card.Body>
									<Card.Title>{title}</Card.Title>
									<Card.Text>
										{description}
									</Card.Text>

								</Card.Body>
								<Card.Footer>
									<Button size="sm">Edit</Button>
								</Card.Footer>
							</Card>

						</CardDeck>
					)
				})}

			</CardDeck>
		</div>
	)
}

export default MyBooks;