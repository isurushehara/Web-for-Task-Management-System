import axios from "axios";
import { authHeader } from "./config";

const API = "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  const res = await axios.get(API, authHeader());
  return res.data;
};

export const createTask = async (title) => {
  const res = await axios.post(API, { title }, authHeader());
  return res.data;
};

export const updateTask = async (id, data) => {
  const res = await axios.put(`${API}/${id}`, data, authHeader());
  return res.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API}/${id}`, authHeader());
};
