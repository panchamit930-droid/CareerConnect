import api from "../api/axios";

const CURRENT_USER_KEY = "careerconnect_current_user";

export const registerUser = async (userData) => {
  const response = await api.get(
    `/users?email=${encodeURIComponent(userData.email)}`,
  );

  if (response.data.length > 0) {
    throw new Error("Email already registered.");
  }

  const newUser = {
    id: Date.now(),
    ...userData,
  };

  const result = await api.post("/users", newUser);

  return result.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await api.get(
    `/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
  );

  if (response.data.length === 0) {
    throw new Error("Invalid email or password.");
  }

  const user = response.data[0];

  const { password: _, ...loggedInUser } = user;

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));

  return loggedInUser;
};

export const logoutUser = async () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  return user ? JSON.parse(user) : null;
};
