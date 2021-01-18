require('./db/mongoose');
const express = require('express');
const app = express();

const imageRoute = require('./routes/imageRoute');

app.use(express.json());
app.use(express.static('public'));
app.use(imageRoute);

module.exports = app;
