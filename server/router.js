// require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers');

const cloudinary = require('cloudinary').v2;


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));



// CLOUDINARY INFORMATION
cloudinary.config({
  cloud_name: process.env['CLOUD_NAME'],
  api_key: process.env['CLOUDINARY_API_KEY'],
  api_secret: process.env['CLOUDINARY_API_SECRET']
});
/**
 * cloudinary.uploader.upload("my_image.jpg", function(error, result) {console.log(result, error)});
 */
app.post('/upload-image', (req, res) => {
  console.log('trying to post', req.body.photoFile);

  var localImg = req.body.photoFile;

  cloudinary.uploader.upload(localImg, (err, res) => {
    if (err) {
      console.log('error:', err);
      res.send('Error')
    } else {
      console.log('res:', res)
      res.send('successfully posted', res)
    }
  });
});

module.exports = app;
