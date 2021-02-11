const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/user-data/:id', (req, res) => {
  controller.getUserData(req.params.id, res);
});
app.get('/plant-data/:id', (req, res) => {
  controller.getPlantData(req.params.id, res);
});
app.get('/categories-data/:id', (req, res) => {
  controller.getCategoriesData(req.params.id, res);
});

module.exports = app;
