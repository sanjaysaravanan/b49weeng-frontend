import axios from "axios";

const backendUrl = import.meta.env
  ? import.meta.env.VITE_BE_URL // localhost
  : // eslint-disable-next-line no-undef
    process.env.VITE_BE_URL; // cloud;

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

// Auth related methods
const registerUser = async (userData) => {
  const response = await backend.post("/register", {
    ...userData,
  });

  return response.data;
};

const loginUser = async (loginData) => {
  try {
    const response = await backend.post("/login", {
      ...loginData,
    });
    return { ...response.data };
  } catch (err) {
    console.log(err);
    return { msg: "Login failed", code: 0 };
  }
};

export { createUser, getAllUsers, registerUser, loginUser };
