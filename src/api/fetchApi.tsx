import axios from "axios";

const url: string = "https://620c70a3b5736325938e3172.mockapi.io";

export const getProducts = async (endpoint: string) => {
  return await axios.get(url + endpoint);
};

export const getProduct = async (endpoint: string, id: string) => {
  return await axios.get(url + endpoint + id);
};
