import axios from "axios";

const instance = axios.create({

  // baseURL: "http://localhost:3030",
  // baseURL: "https://cts-roadmap-sunny-hwm6.onrender.com/",
  // baseURL:"https://cts-roadmap-sunny.onrender.com/",
  // baseURL: "https://cts-roadmap-copy.onrender.com/",
  // baseURL: "https://cts-roadmap.onrender.com",
  // baseURL: "https://cts-roadmap-two.onrender.com/",
  baseURL: "https://api.crosstheskylimits.online",

  
  
  
  withCredentials: true,
});

export default instance;
