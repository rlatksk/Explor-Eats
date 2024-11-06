const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const expressLayout = require("express-ejs-layouts");
const app = express();

require('dotenv').config({ path: '../.env' });

app.use(cors());

const PORT = process.env.PORT || 5000;
const DATABASE = process.env.MONGO_URI;

mongoose.connect(DATABASE)
  .then(() => console.log(`Connected to Database ${DATABASE}`));


console.log('MONGO_URI:', process.env.MONGO_URI);

// app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(expressLayout);
// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');

// app.use('/', require('./routes/main'));

//Test fetching data to react
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
