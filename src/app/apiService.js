// apiService.js
import axios from 'axios';


const BASE_URL = process.env.BACKEND_URL;
console.log(process.env.BACKEND_URL)

export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.log('The error is ', error)
    throw error;
  }
};
