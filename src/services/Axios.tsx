import axios from "axios";

const ACCESS_TOKEN = localStorage.getItem('@cyber-access:TOKEN');

const Axios = axios.create({
  baseURL: `https://dribbble.com/`,
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${ACCESS_TOKEN}`
  },
});

export default Axios;
