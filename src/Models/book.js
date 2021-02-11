const mongoose = require('mongoose');

const bookSchema = {

	title: String,
	description: String,
	recipes: [{
		title: String,
		ingredients: String,
		description: String
		// title: { type: String, required: true },
		// ingredients: { type: String, required: true },
		// description: { type: String, required: true },

	}]

}

const Book = mongoose.model("Book", bookSchema, "books")

module.exports = Book;



