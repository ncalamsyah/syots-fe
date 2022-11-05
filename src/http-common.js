import axios from "axios";

// axios.defaults.baseURL = "https://syots-api.herokuapp.com";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
// axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios.create({
  // baseURL: "https://syots-api.herokuapp.com",
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
});
