import axios from "axios";

const ACCESS_TOKEN = sessionStorage.getItem('@cyber-access:access_token');

const Cors = axios.create({
  baseURL:'https://cors-anywhere.herokuapp.com',
  headers: {
    accept: "application/json",
    'Access-Control-Allow-Origin': '*',
    origin: 'http://localhost:3000/login-response',
    mode: "cors",
    cache: "default"
  } 
});

const Axios = axios.create({
  baseURL: `https://api.dribbble.com/v2/`,
  headers: { 
    Accept: "application/json", 
    Authorization: `Bearer ${ACCESS_TOKEN}`
  },
});

export  { Axios, Cors };
