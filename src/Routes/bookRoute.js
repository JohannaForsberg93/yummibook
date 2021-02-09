const express = require('express');
const router = express.Router({ mergeParams: true });
const Book = require('../Models/book');

//	NEW BOOK ( + 1 recipe)
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

// RECIPES FROM A BOOK ID
router.route('/recipes').get((req, res) => {
	const id = req.query.id.substring(1)

	// Book.find()
	// 	.then(books => {
	// 		console.log("Detta är books och id", books, id)
	// 		const book = books.find(book => {
	// 			console.log("Detta är book._id och id", book._id, id)
	// 			return book._id == id
	// 		})
	// 		console.log("Detta är book nu", book)
	// 		return res.json(book.recipes)
	// 	})
	// .catch(err => res.status(500).send('error +' + err.message))

	console.log("Detta är req.query", req.query)
	// res.send("Detta är req.query", req.query)

	// Book.findById(id, function (err, docs) {
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// 	else {
	// 		console.log("Result : ", docs.recipes);
	// 	}
	// });

	Book.findById(id, function (err, docs) {
		if (err) {
			console.log(err);
			res.send("Error vid hämtning av recept")
		}
		else {
			console.log("Result : ", docs.recipes);
			res.send(docs.recipes)
		}
	});


});

module.exports = router;