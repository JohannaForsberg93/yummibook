const express = require('express');
const router = express.Router();
const Book = require('../Models/book');

//	NEW BOOK + 1 recipe
router.route('/new').post((req, res) => {

	const newBook = new Book({
		title: req.body.title,
		description: req.body.description,
		// recipes: [{
		// 	title: req.body.recipes[0].title,
		// 	description: req.body.recipes[0].description
		// 	//Nu är det endast första[0] objektet i listan som läggs till 
		// }]
	});

	console.log("Detta är req.body", req.body)
	console.log("Detta är newBook.recipes", newBook.recipes)

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

module.exports = router;