import axios from "axios";

const backendUrl = import.meta.env
  ? import.meta.env.VITE_BE_URL // localhost
  : process.env.VITE_BE_URL; // cloud;

const backend = axios.create({
  baseURL: backendUrl,
  timeout: 10000,
});

// Creating an User
const createUser = async (userData) => {
  const response = await backend.post("/users", {
    ...userData,
  });

  return response.data;
};

const getAllUsers = async () => {
  const response = await backend.get("/users");

  return response.data;
};

export { createUser, getAllUsers };
