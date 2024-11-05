if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 5000;
// const database = process.env.Mongo_URIDUMMY;

dotenv.config();

app.use(cors());

// app.use(express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(expressLayout);
// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');

// app.use('/', require('./routes/main'));

//Test fetching data to react
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the server' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});