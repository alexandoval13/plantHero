import axios from 'axios';

const getUser = (id) => {
  .get(`/user-data/${id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
};

const getPlants = (id) => {
  .get(`/plant-data/${id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
};

const getCategories = (id) => {
  .get(`/category-data/${id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
};

module.exports = {
  getUser,
  getPlants,
  getCategories
};
