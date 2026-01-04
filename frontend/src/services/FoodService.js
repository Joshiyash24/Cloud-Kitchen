import axios from "axios";

const API_URL = "http://localhost:8080/api/food";

export const getAllFoodItems = () => {
  return axios.get(API_URL);
};

export const addFood = (food) => {
  return axios.post(API_URL, food);
};

