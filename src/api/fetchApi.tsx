const fetchApi = () => {
  const url: string = "https://620c70a3b5736325938e3172.mockapi.io";
  const getItems = async () => {
    const response = await fetch(`${url}/flowers`);
    return await response.json();
  };
  getItems();
};

export default fetchApi;
