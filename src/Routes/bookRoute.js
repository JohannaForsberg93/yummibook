const express = require('express');
const router = express.Router({ mergeParams: true });
const Book = require('../Models/book');

//	NEW BOOK + 1 recipe
router.route('/new').post((req, res) => {
	const newBook = new Book({
		title: req.body.title,
		description: req.body.description,
		recipes: [{
			title: req.body.recipes[0].title,
			ingredients: req.body.recipes[0].ingredients,
			description: req.body.recipes[0].description
		}]
	});
	newBook.save()
		.catch((error) => {
			res.send("Något gick fel!", error)
		})
});

// ALL BOOKS
router.route('/all').get((req, res) => {
	Book.find()
		.then(books => res.json(books))
		.catch(err => res.status.json('error +', err))
});

// ALL RECIPES FROM A BOOK ID
router.route('/recipes').get((req, res) => {
	const id = req.query.id.substring(1)
	Book.findById(id, function (err, docs) {
		if (err) {
			res.send("Error vid hämtning av recept")
		}
		else {
			res.send(docs)
		}
	});
});

// FIND A BOOK BY ID AND ADD NEW RECIPE
router.route('/recipes/addRecipe').post((req, res) => {

	console.log("Detta är req.body", req.body)
	console.log("Detta är req.body.id", req.body.id)
	const id = req.body.id;

	Book.findById(id, function (err, book) {
		if (err) {
			console.log("Error: ", err);
			res.send("Error: ", err)
		}
		else {

			book.recipes.push(req.body)
			book.save()
			res.send(book.recipes)
		}
	});
});


// FIND A BOOK BY ID AND DELETE
router.route('/all').delete((req, res) => {
	console.log("Detta är req.query.id", req.query.id)
	const id = req.query.id;

	Book.findByIdAndDelete(id, (err, docs) => {
		if (err) {
			console.log("Error: ", err)
			res.send(err)
		}
		else {
			res.send("Successfully removed the book.")
		}
	})
})

// FIND A RECIPE BY ID AND DELETE
router.route('/recipes').delete((req, res) => {
	console.log("Detta är req.query.id", req.query.id)
	const id = req.query.id;

	Book.findByIdAndDelete(id, (err, docs) => {
		if (err) {
			console.log("Error: ", err)
			res.send(err)
		}
		else {
			res.send("Successfully removed the recipe.")
		}
	})
})





module.exports = router;