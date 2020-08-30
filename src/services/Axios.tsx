import axios from "axios";

const ACCESS_TOKEN = localStorage.getItem('@cyber-access:access_token');

const Axios = axios.create({
  baseURL: `https://api.dribbble.com/v2`,
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${ACCESS_TOKEN}`
  },
});

export  { Axios };
