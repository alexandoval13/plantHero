const data = require('../models');

// const testController = () => {
//   console.log('controller tested');

//   test.testModel((err, res) => {
//     if (err) {
//       res.send('Error');
//     } else {
//       console.log('cool');
//       res.send(res);
//     }
//   });
// };

const getUserData = (id, res) => {
  console.log('getting user data');

  data.getUser(id, (data) => {
    res.send(data);
  });
};

const getPlantData = (id, res) => {
  console.log('getting plant data');

  data.getPlants(id, (data) => {
    console.log('controller received:', data);
    res.send(data);
  });
};

const getCategoriesData = (id, res) => {
  data.getCategories(id, (data) => {
    res.send(data);
  });
};

module.exports = {
  // testController,
  getUserData,
  getPlantData,
  getCategoriesData,
};
