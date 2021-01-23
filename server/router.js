const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));


app.post('/test', controller.testController);

module.exports = app;