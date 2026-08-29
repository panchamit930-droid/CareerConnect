import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../../services/authService";

const initialState = {
  currentUser: getCurrentUser(),
  isAuthenticated: !!getCurrentUser(),
  loading: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      return await registerUser(userData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginUser(credentials);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logoutUserThunk = createAsyncThunk("auth/logoutUser", async () => {
  await logoutUser();
});

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem(
        "careerconnect_current_user",
        JSON.stringify(action.payload),
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerUserThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })

      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.currentUser = action.payload;
        state.isAuthenticated = true;
      })

      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.error = null;
      });
  },
});

export const { clearError, updateCurrentUser } = authSlice.actions;

export default authSlice.reducer;
