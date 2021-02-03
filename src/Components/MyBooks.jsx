import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/mybooks.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom'

function MyBooks() {


	const history = useHistory();

	function handleHistory(id) {
		console.log("Inuti handleHistory detta är id", id)
		history.push({
			pathname: "/books/recipes/",
			search: id
			// state: { id }
		})

		// history.push(`/books/recipes/${id}`)
	}

	// function handleState() {
	// 	setState(true)
	// 	if (state) {
	// 		// window.location.reload()
	// 	}
	// 	// setTimeout(() => window.location.reload(), 0.100);

	// }

	// const [id, setId] = useState("")

	// const [state, setState] = useState(false)
	const [apiData, setApiData] = useState([]);
	useEffect(() => {

		axios.get('http://localhost:4000/books/all')
			.then((response) => {
				setApiData(response.data)

			})
			.catch((error) => {
				console.log("något gick fel", error)
			})

	}, []);


	console.log("Mybooks renderas")
	return (
		<Router>
			<div className="mybooks-container">
				<h1>My Yummibooks</h1>

				<CardDeck className="card-deck">
					{apiData.map((book, index) => {
						// console.log("Detta är apiData inuti CardDeck", apiData)
						// const { title, description } = book;
						return (
							<Card key={index}  >
								{/* <Link to={{ pathname: '/books/recipes/', state: { _id } }} > */}
								<Card.Img onClick={() => handleHistory(book._id)} variant="top" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
								{/* </Link> */}

								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
									<Card.Text>
										{book.description}
									</Card.Text>
								</Card.Body>

								<Card.Footer>
									<Button size="sm"> Edit</Button>
								</Card.Footer>
							</Card>
						)
					})}

				</CardDeck>

			</div>
		</Router>
	)



}

export default MyBooks;