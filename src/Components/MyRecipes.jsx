import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Styles/mybooks.css';
import { Card, CardDeck } from 'react-bootstrap';
import '../App.css';
import { useLocation } from 'react-router-dom';
import AddRecipe from './AddRecipe';


function MyRecipes() {
	const [book, setBook] = useState({
		recipes: [],
		bookTitle: "",
		bookId: ""
	})
	const [recipeId, setRecipeId] = useState([])

	const location = useLocation();
	const id = location.search;

	// console.log("Vad är book.recipes._id?", book.recipes._id)
	useEffect(() => {
		axios.get('http://localhost:4000/books/recipes', { params: { id: id } })
			.then((response) => {
				// console.log("Detta är response", response)
				setBook({
					recipes: response.data.recipes,
					bookTitle: response.data.title,
					bookId: response.data._id
				})
				// console.log("Detta är recipe id", response.data.recipes)
				setRecipeId(response.data.recipes._id)
			})
			.catch((error) => {
				console.log("Något gick fel vid hämtning av recept", error)
			})
	}, [book]);


	return (
		<div className="mybooks-container">
			<h1>{book.bookTitle}</h1>

			<CardDeck className="card-deck">
				{book.recipes.map((recipe, index) => {

					return (
						<Card key={index} >
							<Card.Img variant="top" src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />

							<Card.Body>
								<h3>{recipe.title}</h3><br></br>
								<Card.Text>
									<b>Ingredienser:</b> <br></br>
									{recipe.ingredients}
								</Card.Text>
								<Card.Text>
									<b>Gör såhär: </b><br></br>
									{recipe.description}
								</Card.Text>
							</Card.Body>

							<Card.Footer>
								{/* <Button onClick={deleteBook(recipe._id)} size="sm">Delete</Button> */}
							</Card.Footer>
						</Card>
					)
				})}

			</CardDeck>
			<br />

			<AddRecipe id={book.bookId}></AddRecipe>


		</div>
	)
}

export default MyRecipes;