const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.route('/').post((req, res) => {

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
