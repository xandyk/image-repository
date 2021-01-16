require('./db/mongoose');
const express = require('express');
const imageRoute = require('./routes/imageRoute');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(imageRoute);

module.exports = app;
