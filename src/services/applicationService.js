import api from "../api/axios";

export const applyJob = async (applicationData) => {
  const response = await api.get("/applications");

  const alreadyApplied = response.data.find(
    (application) =>
      application.jobId === applicationData.jobId &&
      application.applicantId === applicationData.applicantId,
  );

  if (alreadyApplied) {
    throw new Error("You have already applied for this job.");
  }

  const newApplication = {
    id: Date.now(),
    ...applicationData,
    status: "Pending",
    appliedDate: new Date().toLocaleDateString(),
  };

  const result = await api.post("/applications", newApplication);

  return result.data;
};

export const getApplications = async () => {
  const response = await api.get("/applications");
  return response.data;
};

export const updateApplicationStatus = async (applicationId, status) => {
  const response = await api.patch(`/applications/${applicationId}`, {
    status,
  });

  return response.data;
};
