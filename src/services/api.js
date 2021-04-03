import axios from "axios";

const apiClient = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
  baseURL: "https://diamondspricepredict.herokuapp.com/api"
});

export default apiClient;
