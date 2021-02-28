const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get('/:id', (req, res) => {
  console.log(req.params['id']);
  if (req.params['id'] >= 1 && req.params['id'] <= 13) {
    res.status(200);
    res.sendFile(
      '/Users/alexandra/Hack-Reactor/SEI-hrr49/MVP/Rootie/client/dist/index.html'
    );
  } else {
    res.status(404);
    res.end();
  }
});

app.get('/user-data/:id', (req, res) => {
  controller.getUserData(req.params.id, res);
});
app.get('/plant-data/:id', (req, res) => {
  controller.getPlantData(req.params.id, res);
});
app.get('/categories-data/:id', (req, res) => {
  controller.getCategoriesData(req.params.id, res);
});

app.post('/plant-data/:id', (req, res) => {
  controller.addPlantData(req.body, res);
});

app.put('/plant-water', (req, res) => {
  controller.updateWaterDate(req.body, res);
});

app.put('/plant-category', (req, res) => {
  controller.addToCategory(req.body, res);
});

module.exports = app;
