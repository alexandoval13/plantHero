import axios from 'axios';

var getUser = (id) => {
  return axios
    .get(`/user-data/${id}`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

var getPlants = (id) => {
  return axios
    .get(`/plant-data/${id}`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

var getCategories = (id) => {
  return axios
    .get(`/categories-data/${id}`)
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getUser, getPlants, getCategories };
