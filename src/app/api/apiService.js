// apiService.js
import axios from 'axios';


const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(BASE_URL)

export const login = async (userData) => {
    console.log(userData)
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.log('The error is ', error)
    throw error;
  }
};

export const signup = async (userData) => {
  console.log(userData)
try {
  const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
  console.log(response.data)
  return response.data;
} catch (error) {
  console.log('The error is ', error)
  throw error;
}
};

