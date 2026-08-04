import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  applyJob,
  getApplications,
  updateApplicationStatus,
} from "../../services/applicationService";

const initialState = {
  applications: [],
  loading: false,
  error: null,
};

// Apply Job
export const applyJobThunk = createAsyncThunk(
  "applications/applyJob",
  async (applicationData, { rejectWithValue }) => {
    try {
      return await applyJob(applicationData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Get Applications
export const getApplicationsThunk = createAsyncThunk(
  "applications/getApplications",
  async (_, { rejectWithValue }) => {
    try {
      return await getApplications();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateApplicationStatusThunk = createAsyncThunk(
  "applications/updateApplicationStatus",
  async ({ applicationId, status }, { rejectWithValue }) => {
    try {
      return await updateApplicationStatus(applicationId, status);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const applicationSlice = createSlice({
  name: "applications",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Apply
      .addCase(applyJobThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(applyJobThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.applications.push(action.payload);
      })

      .addCase(applyJobThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get Applications
      .addCase(getApplicationsThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getApplicationsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
      })

      .addCase(getApplicationsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateApplicationStatusThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateApplicationStatusThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.applications = state.applications.map((application) =>
          application.id === action.payload.id ? action.payload : application,
        );
      })

      .addCase(updateApplicationStatusThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default applicationSlice.reducer;
