import axios from "axios";

const instance = axios.create({

  baseURL: "http://localhost:3030/api/v1",
  // baseURL: "https://internshala-backend-twn2.onrender.com/",
  withCredentials: true,
});

export default instance;
