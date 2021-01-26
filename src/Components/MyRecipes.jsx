import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../Styles/mybooks.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import '../App.css';

function MyRecipes() {


	const [recipe, setRecipe] = useState({});

	axios.get('http://localhost:4000/books/recipes')
		.then((response) => {
			console.log("Detta är response från MyRecipes", response)
		})
	// setRecipe(response.data) ? eller .json()


	const object = {
		title: "Pannacotta",
		description: "Bla bla bla bla"
	};

	return (
		<div className="mybooks-container">
			<h1>Recipes</h1>
			<h3>Create a new recipe</h3>
			<CardDeck className="card-deck">
				<Card>
					<Card.Img variant="top" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
					<Card.Body>
						<Card.Title>{object.title}</Card.Title>
						<Card.Text>
							{object.description}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button size="sm">Edit</Button>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This card has supporting text below as a natural lead-in to additional
							content.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button size="sm">Edit</Button>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This card has even longer content than the first to
							show that equal height action.
      					</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button size="sm">Edit</Button>
					</Card.Footer>
				</Card>
			</CardDeck>



		</div>
	)
}

export default MyRecipes;