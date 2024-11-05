if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;
// const database = process.env.Mongo_URIDUMMY;

dotenv.config();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./routes/main'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});