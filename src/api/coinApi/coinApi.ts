import axios from "axios";

const coinApi = axios.create({
  baseURL: "https://api.coingecko.com/api",
  params: { apikey: "0F81A726-57B9-4E77-B3E3-8756F5ABEB1C" },
});

export default coinApi;
