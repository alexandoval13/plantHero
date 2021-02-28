const data = require('../models');

const getUserData = (id, res) => {
  data.getUser(id, (data) => {
    res.send(data);
  });
};

const getPlantData = (id, res) => {
  data.getPlants(id, (data) => {
    res.send(data);
  });
};

const getCategoriesData = (id, res) => {
  data.getCategories(id, (data) => {
    res.send(data);
  });
};

const addPlantData = (plant, res) => {
  data.addPlant(plant, (data) => {
    res.send(data);
  });
};

const updateWaterDate = (info, res) => {
  data.updateWater(info, (data) => {
    res.send(data);
  });
};

const addToCategory = (info, res) => {
  data.addIdToCategory(info, (data) => {
    console.log(data);
    res.send(data);
  });
};

module.exports = {
  getUserData,
  getPlantData,
  getCategoriesData,
  addPlantData,
  updateWaterDate,
  addToCategory,
};
