import React from 'react';
import '../Styles/create.css';
import { useState } from 'react';
import { FormControl, FormGroup, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom'



function CreateNew() {

	const history = useHistory();

	const [book, setBook] = useState({
		title: "",
		description: "",
		recipes: []

	});
	const [recipe, setRecipe] = useState({
		title: "",
		ingredients: "",
		description: ""
	})

	function handleSubmit(e) {
		console.log("Inuti handleSubmit, värdet av book och recipe", book, recipe)
		e.preventDefault();

		const recipeData = {
			title: recipe.title,
			ingredients: recipe.ingredients,
			description: recipe.description
		}

		const newBook = {
			title: book.title,
			description: book.description,
			recipes: [...book.recipes, recipeData]
		}

		axios.post('http://localhost:4000/books/new', newBook)
			.then((response) => {
				console.log("Detta är response", response)
			})
			.catch((error) => {
				console.log("Något gick fel", error)
			})
		setBook({
			title: "",
			description: "",
			recipes: []

		})
		setRecipe({
			title: "",
			ingredients: "",
			description: ""
		})
		// setTimeout(() => window.location.reload(), 1000);
		history.push('/books/all')


	}
	function handleChange(e) {
		setBook({ ...book, [e.currentTarget.name]: e.currentTarget.value });
	}
	function handleRecipe(e) {
		setRecipe({ ...recipe, [e.currentTarget.name]: e.currentTarget.value });
	}
	return (
		<div className="create-page">
			<h1>Create new Yummibook</h1>

			<Form>
				<FormGroup>
					<FormControl
						id="title"
						name="title"
						value={book.title}
						onChange={handleChange}
						className="create-form-control"
						size="sm"
						type="text"
						placeholder="Book title"
						autoComplete="off"
					>

					</FormControl>
				</FormGroup>
				<FormGroup>
					<FormControl
						id="description"
						name="description"
						value={book.description}
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
				<br /><br />
				<div>
					<h3>Create your first recipe for this book!</h3>

					<FormGroup>
						<FormControl
							id="title"
							name="title"
							value={recipe.title}
							onChange={handleRecipe}
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
							onChange={handleRecipe}
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
							onChange={handleRecipe}
							className="create-form-control"
							size="sm"
							as="textarea"
							rows={5}
							placeholder="Recipe"
							autoComplete="off"
						>
						</FormControl>
					</FormGroup>
					<Button className="create-form-button" type="submit" onClick={handleSubmit}>Create!</Button>
				</div>
			</Form>
		</div>
	)
}

export default CreateNew;