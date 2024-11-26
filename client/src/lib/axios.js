import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_BASE_URL,
});

export default axiosInstance;