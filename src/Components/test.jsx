import React from 'react';
import '../Styles/create.css';
import { useState } from 'react';
import { FormControl, FormGroup, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';
import { BrowserRouter as Router, useHistory } from 'react-router-dom'



function test() {

	const history = useHistory();

	const [book, setBook] = useState({
		title: "",
		description: "",
		recipes: []

	});
	const [recipe, setRecipe] = useState({
		title: "",
		description: ""
	})

	function handleSubmit(e) {
		console.log("Inuti handleSubmit, värdet av book och recipe", book, recipe)
		e.preventDefault();

		const recipeData = {
			title: recipe.title,
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
			description: ""
		})
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
				{/* <Form.File
					id="image"
					name="image"
					value={book.image}
					onChange={handleChange}
					id="image"
					label="Upload file"
					custom
					className="file-upload"
				/> */}
				<br />
				{/* TOG BORT DETTA SÅ DET GÅR INTE ATT SPARA ETT FÖRSTA RECEPT  */}
				<h3>Create your first recipe for this book!</h3>
				<br /><br />
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
			</Form>
			<Button type="submit" onClick={handleSubmit}>Create!</Button>
		</div>
	)
}

export default test;