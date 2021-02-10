const test = require('../models');

const testController = () => {
  console.log('controller tested');

  test.testModel((err, res) => {
    if (err) {
      res.send('Error');
    } else {
      console.log('cool');
      res.send(res);
    }
  });
}

module.exports = {
  testController
}