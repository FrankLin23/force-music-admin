import axios from "axios";

const tokenPrefix = "Bearer ";

const instance = axios.create({
  baseURL: "",
});

export default instance;
