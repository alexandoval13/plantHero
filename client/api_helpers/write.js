import axios from 'axios';

export const addPlant = (plant, id) => {
  console.log(plant);
  return axios.post(`/plant-data/${id}`, plant);
};

export const updateWaterDate = (data) => {
  console.log('updating plant with the following id:', data.id);
  return axios.put(`/plant-water`, data);
};
