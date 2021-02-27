import axios from 'axios';

export const addPlant = (plant, id) => {
  console.log(plant);
  return axios.post(`/plant-data/${id}`, plant);
};
