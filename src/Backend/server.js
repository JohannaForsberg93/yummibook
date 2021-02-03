const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
const port = process.env.port || 4000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next()
})

//BOOK ROUTE
app.use('/books', require('../Routes/bookRoute'));


//USER ROUTE
app.use('/login', require('../Routes/userRoute'));


// app.post('/login', (req, res) => {
// 	res.send("Här skickar jag med true/false om användaren finns tillsammans med böcker och recept")
// });


app.listen(port, () => {
	console.log("Web server listening on localhost:" + port);
})
