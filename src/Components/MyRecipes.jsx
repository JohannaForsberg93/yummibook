import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Styles/mybooks.css';
import { Card, CardDeck, Button } from 'react-bootstrap';
import '../App.css';
import { useParams, useLocation } from 'react-router-dom';


function MyRecipes() {

	const [recipes, setRecipes] = useState([])

	const location = useLocation();
	// const id = props.location.state.id; 
	// const { id } = useParams();
	const id = location.search;
	console.log("Detta är id", id)
	console.log("Detta är typeof", typeof id)
	// const id = props.match.params;
	// JSON.stringify(id)
	// Object.values(id) = id;

	// console.log("Detta är id", id)
	// console.log("Detta är typeof id", typeof id)
	// const [recipe, setRecipe] = useState([]);


	useEffect(() => {
		axios.get('http://localhost:4000/books/recipes', { params: { id: id } })
			.then((response) => {
				console.log("Detta är response", response.data)
				setRecipes(response.data)
			})
			.catch((error) => {
				console.log("Något gick fel vid hämtning av recept", error)
			})
	}, []);

	console.log("Detta är recipes", recipes)
	const object = {
		title: "Pannacotta",
		description: "Bla bla bla bla"
	};
	return (
		<div className="mybooks-container">
			<h1>Recipes</h1> <Button className="btn btn-info m-3">Add recipe</Button>

			<CardDeck className="card-deck">
				{recipes.map((recipe, index) => {

					return (
						<Card key={index} >
							<Card.Img variant="top" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />

							<Card.Body>
								<h3>{recipe.title}</h3><br></br>
								<Card.Text>
									<h5>Du behöver:</h5>
									{recipe.ingredients}
								</Card.Text>
								<Card.Text>
									<h5>Gör såhär:</h5>
									{recipe.description}
								</Card.Text>
							</Card.Body>

							<Card.Footer>
								<Button size="sm"> Edit</Button>
							</Card.Footer>
						</Card>
					)
				})}

			</CardDeck>



			{/* <CardDeck className="card-deck">
				<Card>
					<Card.Img variant="top" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
					<Card.Body>
						<Card.Title>{recipes[0].title}</Card.Title>
						<Card.Text>
							{recipes[0].description}
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<Button size="sm">Edit</Button>
					</Card.Footer>
				</Card>
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
			</CardDeck> */}

		</div>
	)
}

export default MyRecipes;