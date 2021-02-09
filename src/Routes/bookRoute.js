const express = require('express');
const router = express.Router({ mergeParams: true });
const Book = require('../Models/book');

//	NEW BOOK ( + 1 recipe)
router.route('/new').post((req, res) => {

	const newBook = new Book({
		title: req.body.title,
		description: req.body.description,
		recipes: [{
			title: req.body.recipes[0].title,
			ingredients: req.body.recipes[0].ingredients,
			description: req.body.recipes[0].description
			//Nu är det endast första[0] objektet i listan som läggs till 
		}]
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

	Book.findById(id, function (err, docs) {
		if (err) {
			console.log(err);
			res.send("Error vid hämtning av recept")
		}
		else {
			console.log("Detta är värdet av docs (hela boken): ", docs);
			// res.send(docs.recipes)
			res.send(docs)

		}
	});




});

// FIND A BOOK BY ID AND UPDATE WITH NEW RECIPE
router.route('/recipes/addRecipe').put((req, res) => {

	// const newBook = new Book({
	// 	title: req.body.title,
	// 	description: req.body.description,
	// 	recipes: [{
	// 		title: req.body.recipes[0].title,
	// 		ingredients: req.body.recipes[0].ingredients,
	// 		description: req.body.recipes[0].description
	// 		//Nu är det endast första[0] objektet i listan som läggs till 
	// 	}]
	// });
	console.log("Detta är req.body", req.body)

	Book.findByIdAndUpdate(

		// the id of the item to find
		req.body.id,

		// the change to be made. Mongoose will smartly combine your existing 
		// document with this change, which allows for partial updates too
		req.body,

		// an option that asks mongoose to return the updated version 
		// of the document instead of the pre-updated one.
		{ new: true },

		// the callback function
		(err, doc) => {
			// Handle any possible database errors
			if (err) return res.status(500).send(err);
			return res.send(doc);
		}
	)

	// Book.find({ _id: req.body.id }, function (err, docs) {
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// 	else {
	// 		console.log("Found your book : ", docs.recipes);

	// 	}
	// });

	console.log("Detta är req.body", req.body)
	console.log("Detta är req.body.id", req.body.id)


});


module.exports = router;