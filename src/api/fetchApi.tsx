import axios from "axios";

const url: string = "https://620c70a3b5736325938e3172.mockapi.io";

export const getProducts = (endpoint: string) => {
  return axios.get(url + endpoint);
};

export const getProduct = (endpoint: string, id: string) => {
  return axios.get(url + endpoint + id);
};
