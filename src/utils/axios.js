import axios from "axios";

const instance = axios.create({

  // baseURL: "http://localhost:3030",
  baseURL: "https://cts-backend-r017.onrender.com/",


  
  
  
  withCredentials: true,
});

export default instance;
