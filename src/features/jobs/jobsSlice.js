import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createJob,
  getJobs,
  deleteJob,
  updateJob,
  getJobById,
} from "../../services/jobService";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
  selectedJob: null,
};

export const getJobsThunk = createAsyncThunk(
  "jobs/getJobs",
  async (_, { rejectWithValue }) => {
    try {
      return await getJobs();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const createJobThunk = createAsyncThunk(
  "jobs/createJob",
  async (jobData, { rejectWithValue }) => {
    try {
      return await createJob(jobData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteJobThunk = createAsyncThunk(
  "jobs/deleteJob",
  async (id, { rejectWithValue }) => {
    try {
      return await deleteJob(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateJobThunk = createAsyncThunk(
  "jobs/updateJob",
  async (job, { rejectWithValue }) => {
    try {
      return await updateJob(job);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getJobByIdThunk = createAsyncThunk(
  "jobs/getJobById",
  async (id, { rejectWithValue }) => {
    try {
      return await getJobById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getJobsThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getJobsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })

      .addCase(getJobsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createJobThunk.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })

      .addCase(deleteJobThunk.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      })

      .addCase(updateJobThunk.fulfilled, (state, action) => {
        const index = state.jobs.findIndex(
          (job) => job.id === action.payload.id,
        );

        if (index !== -1) {
          state.jobs[index] = action.payload;
        }
      })

      .addCase(getJobByIdThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getJobByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedJob = action.payload;
      })

      .addCase(getJobByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobsSlice.reducer;
