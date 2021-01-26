const mongoose = require('mongoose');

const userSchema = {
	username: String,
	password: String,
	// type: mongoose.Types.ObjectId,

}


const User = mongoose.model("User", userSchema, "user")

module.exports = User;