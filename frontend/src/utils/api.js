import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; 

export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/auth/login`, userData);
};
