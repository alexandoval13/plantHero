// const app = require('./app.js');


// app.listen(port, () => {
  //   console.log(`Connected to server at port ${port}`)
  // });

require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary').v2;



const app = express();

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
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



app.listen(port, () => {
  console.log(`Connected to server at port ${port}`);
})