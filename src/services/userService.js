import api from "../api/axios";

// ==========================
// Get All Users
// ==========================
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

// ==========================
// Get User By ID
// ==========================
export const getUserById = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

// ==========================
// Update User Profile
// ==========================
export const updateUser = async (id, userData) => {
  const response = await api.patch(`/users/${id}`, userData);
  return response.data;
};
