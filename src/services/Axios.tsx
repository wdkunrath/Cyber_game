import axios from "axios";

const ACCESS_TOKEN = localStorage.getItem('@cyber-access:TOKEN');

const Cors = axios.create({
  baseURL:'https://cors-anywhere.herokuapp.com',
  headers: {
    accept: "application/json",
    'Access-Control-Allow-Origin': '*',
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
