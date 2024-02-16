import axios from "axios";

const TOKEN = "cn72jehr01qgjtj48gdgcn72jehr01qgjtj48ge0";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
