import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const signup = async (data) => {
  const res = await axios.post(`${API}/signup`, data);
  return res.data; 
};

export const login = async (data) => {
  const res = await axios.post(`${API}/login`, data);
  return res.data;
};
