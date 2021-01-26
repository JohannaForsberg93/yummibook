const express = require('express');
// const { Mongoose } = require('mongoose');
const router = express.Router();
const User = require('../Models/user');

router.route('/').post((req, res) => {

	// console.log("Detta är req.body", req.body)

	// const newUser = new User({
	// 	username: req.body.username,
	// 	password: req.body.password
	// 	// _id: new Mongoose.Types.ObjectId(),
	// });

	// User.findOne({
	// username: req.body.username,
	// password: req.body.password
	// })
	// 	.then((user) => {
	// 		if (!user) { //user doesn't exist
	// 			newUser.save()
	// 			return res.status(404).send('User not found');
	// 		}
	// 		res.render('/', { //user exist
	// 			username: req.body.username,
	// 			password: req.body.password
	// 		});
	// 	})


	User.findOne({
		username: req.body.username,
		password: req.body.password
	})
		.then(user => {

			if (!user) {
				return res.status(404).send('User not found');
			} else {
				res.json(user)
			}
		}).catch(err => res.send("Något gick fel", err));

});

module.exports = router;


// router.get('/', (req, res) => {
// 	User.findOne({ username: req.body.username, password: req.body.password }).then((user) => {
// 		if (!user) { //if user not exist in db
// 			return res.status(404).send('User not found');
// 		}
// 		res.render('/', { //page  exist
// 			username: req.body.username,
// 			password: req.body.password
// 		});
// 	}).catch((e) => {//bad request 
// 		res.status(400).send(e);
// 	});
// });


// Place.findOne({
// 	_id: req.params.id
// })
// 	.then(place => {
// 		// Add the IF here
// 		if (!place) {
// 			return res.status(404).send('Place not found');
// 		}

// 		const newNote = {
// 			noteBody: req.body.noteBody,
// 			noteUser: req.user.id,
// 		}

// 		place.tickets.notes.unshift(newNote);
// 		place.save()
// 			.then(place => {
// 				res.redirect('back')
// 			}).catch(err => res.send(err));
// 	}).catch(err => res.send(err));