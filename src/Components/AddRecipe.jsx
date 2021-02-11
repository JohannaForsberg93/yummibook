import React from 'react';
import '../Styles/create.css';
import '../App.css';
import { useState } from 'react';
import { FormControl, FormGroup, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function AddRecipe(props) {

	const id = props.id;
	// console.log("Detta är props.bookId", id)

	// const [error, showError] = useState(false)
	const [success, showSuccess] = useState(false)
	const [recipe, setRecipe] = useState({
		title: "",
		ingredients: "",
		description: ""
	})

	function handleSubmit(e) {
		console.log("Inuti handleSubmit, värdet av recipe", recipe)
		e.preventDefault();

		const recipeData = {
			title: recipe.title,
			ingredients: recipe.ingredients,
			description: recipe.description,
			id: id
		}

		axios.post('http://localhost:4000/books/recipes/addRecipe', recipeData)

			// if (response === 200) {
			// 	console.log("Detta är response", response)
			// 	showSuccess(true)
			// }
			// else {
			// 	console.log("Något gick fel", error)
			// }

			.then((response) => {
				console.log("Detta är response", response)
				showSuccess(true)
			})
			.catch((error) => {
				console.log("Något gick fel", error)
				// showError(true)
			})

		setRecipe(
			{
				title: "",
				ingredients: "",
				description: ""
			})


	}

	function handleChange(e) {
		setRecipe({ ...recipe, [e.currentTarget.name]: e.currentTarget.value });
	}

	return (
		<div className="add-recipe-container">
			<h1>Create new recipe</h1>
			<Form >
				<FormGroup>
					<FormControl
						id="title"
						name="title"
						value={recipe.title}
						onChange={handleChange}
						className="create-form-control"
						size="sm"
						type="text"
						placeholder="Recipe title"
						autoComplete="off"
					>

					</FormControl>
				</FormGroup>
				<FormGroup>
					<FormControl
						id="ingredients"
						name="ingredients"
						value={recipe.ingredients}
						onChange={handleChange}
						className="create-form-control"
						size="sm"
						as="textarea"
						rows={2}
						placeholder="Ingredients"
						autoComplete="off"
					>
					</FormControl>
				</FormGroup>

				<FormGroup>
					<FormControl
						id="description"
						name="description"
						value={recipe.description}
						onChange={handleChange}
						className="create-form-control"
						size="sm"
						as="textarea"
						rows={5}
						placeholder="Description"
						autoComplete="off"
					>
					</FormControl>
				</FormGroup>
				<Button type="submit" onClick={handleSubmit}>Create!</Button>
				{success ? <h3 className="animate__animated animate__headShake">Lyckades spara ditt recept!</h3> : null}
				{/* {error ? <h3>Ajdå, något gick fel... Prova igen!</h3> : null} */}
			</Form>
		</div>
	)
}

export default AddRecipe;