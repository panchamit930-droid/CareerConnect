import api from "../api/axios";

export const createJob = async (jobData) => {
  const response = await api.post("/jobs", {
    id: Date.now(),
    ...jobData,
  });

  return response.data;
};

export const getJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};

export const deleteJob = async (id) => {
  await api.delete(`/jobs/${id}`);
  return id;
};

export const updateJob = async (job) => {
  const response = await api.put(`/jobs/${job.id}`, job);
  return response.data;
};

export const getJobById = async (id) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};
