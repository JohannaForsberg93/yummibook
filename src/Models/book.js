const mongoose = require('mongoose');

const bookSchema = {

	title: String,
	description: String,
	recipes: [{
		title: String,
		description: String

	}]

}

const Book = mongoose.model("Book", bookSchema, "books")

module.exports = Book;



