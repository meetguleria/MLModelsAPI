import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 5000,
  });

export const PREDICT_URL = '/predict/';
