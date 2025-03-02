import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getEvents = async () => {
  return await axios.get(`${API_URL}/events`);
};

export const loginUser = async (email, password) => {
  return await axios.post(`${API_URL}/auth/login`, { email, password });
};
