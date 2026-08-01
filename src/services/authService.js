import api from "../api/axios";

const CURRENT_USER_KEY = "careerconnect_current_user";

// ===========================
// Register User
// ===========================
export const registerUser = async (userData) => {
  // Check if email already exists
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

// ===========================
// Login User
// ===========================
export const loginUser = async ({ email, password }) => {
  const response = await api.get(
    `/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
  );

  if (response.data.length === 0) {
    throw new Error("Invalid email or password.");
  }

  const user = response.data[0];

  // Remove password before storing session
  const { password: _, ...loggedInUser } = user;

  // Save only the logged-in user
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));

  return loggedInUser;
};

// ===========================
// Logout
// ===========================
export const logoutUser = async () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

// ===========================
// Get Current User
// ===========================
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
};
