import axios from "axios";

const instance = axios.create({

  // baseURL: "http://localhost:3030",
  baseURL: "https://cts-roadmap-copy.onrender.com/",
  // baseURL: "https://cts-roadmap.onrender.com",
  
  withCredentials: true,
});

export default instance;
