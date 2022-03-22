import axios from "axios";

const url: string = "https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/flowers.json";

export const getProducts = () => {
  return axios.get(url);
};

export const getProduct = () => {
  return axios.get(url);
};
