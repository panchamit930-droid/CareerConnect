import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getUsers,
  getUserById,
  updateUser,
} from "../../services/userService";

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      return await getUsers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getUserByIdThunk = createAsyncThunk(
  "users/getUserById",
  async (id, { rejectWithValue }) => {
    try {
      return await getUserById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/updateUser",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      return await updateUser(id, userData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })

      .addCase(getUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getUserByIdThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getUserByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })

      .addCase(getUserByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateUserThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;

        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })

      .addCase(updateUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedUser } = userSlice.actions;

export default userSlice.reducer;