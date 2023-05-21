import axios from 'axios';

export const axiosReq = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true
})