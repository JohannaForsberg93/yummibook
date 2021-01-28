import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/mybooks.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter as Router, useHistory, Link } from 'react-router-dom'

function MyBooks() {


	// const history = useHistory();

	// function handleHistory(id) {

	// 	history.push('/books/recipes')

	// 	// history.push(`/books/recipes/${id}`)
	// }

	function handleState() {
		setState(true)
		if (state) {
			window.location.reload()
		}
		setTimeout(() => window.location.reload(), 0.100);

	}

	const [state, setState] = useState(false)
	const [apiData, setApiData] = useState([]);
	useEffect(() => {

		axios.get('http://localhost:4000/books/all')
			.then((response) => {
				console.log("detta är response.data", response.data)
				setApiData(response.data)

			})
			.catch((error) => {
				console.log("något gick fel", error)
			})

	}, []);


	// console.log("Detta är apiData", apiData)

	return (
		<Router>


			<div className="mybooks-container">
				<h1>My Yummibooks</h1>

				<CardDeck>
					{apiData.map((book, index) => {
						const { title, description, _id } = book; return (

							<CardDeck key={index} className="card-deck">

								<Card>
									<Link to={{ pathname: '/books/recipes', state: { _id } }} >
										<Card.Img onClick={handleState} variant="top" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />

									</Link>

									<Card.Body>
										<Card.Title>{title}</Card.Title>
										<Card.Text>
											{description}
										</Card.Text>

									</Card.Body>
									<Card.Footer>

										{/* <Button size="sm"> <Link to={{ pathname: '/books/recipes', state: { _id } }}></Link> Go to Recipes</Button> */}
										<Button size="sm"> Edit</Button>
									</Card.Footer>
								</Card>

							</CardDeck>
						)
					})}

				</CardDeck>

			</div>
		</Router>
	)



}

export default MyBooks;