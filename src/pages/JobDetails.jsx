import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import Button from "../components/Button/Button";

import { getJobByIdThunk } from "../features/jobs/jobsSlice";
import { applyJobThunk } from "../features/applications/applicationSlice";
import { getApplicationsThunk } from "../features/applications/applicationSlice";

const JobDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { selectedJob, loading } = useSelector((state) => state.jobs);

  const { currentUser } = useSelector((state) => state.auth);

  const { applications } = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(getJobByIdThunk(id));
    dispatch(getApplicationsThunk());
  }, [dispatch, id]);

  const alreadyApplied = applications.some(
    (application) =>
      application.jobId === selectedJob?.id &&
      application.applicantId === currentUser.id,
  );

  const handleApply = () => {
    if (alreadyApplied) return;

    dispatch(
      applyJobThunk({
        jobId: selectedJob.id,
        employerId: selectedJob.employerId,
        applicantId: currentUser.id,
      }),
    );
  };

  if (loading || !selectedJob) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <>
      <DashboardNavbar />

      <div className="max-w-5xl mx-auto p-8">
        <button onClick={() => navigate(-1)} className="text-blue-600 mb-6">
          ← Back to Jobs
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold">{selectedJob.title}</h1>

          <h2 className="text-xl text-gray-600 mt-2">
            {selectedJob.companyName}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div>
              <p className="font-semibold">Location</p>
              <p>{selectedJob.location}</p>
            </div>

            <div>
              <p className="font-semibold">Job Type</p>
              <p>{selectedJob.jobType}</p>
            </div>

            <div>
              <p className="font-semibold">Salary</p>
              <p>{selectedJob.salary}</p>
            </div>

            <div>
              <p className="font-semibold">Experience</p>
              <p>{selectedJob.experience || "-"}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Job Description</h3>

            <p className="mt-3 text-gray-600">{selectedJob.description}</p>
          </div>

          {selectedJob.skills && (
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-4">Skills Required</h3>

              <div className="flex flex-wrap gap-3">
                {selectedJob.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <Button onClick={handleApply} disabled={alreadyApplied}>
              {alreadyApplied ? "✓ Applied" : "Apply Now"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
