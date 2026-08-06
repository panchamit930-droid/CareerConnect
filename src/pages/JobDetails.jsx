import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import Button from "../components/Button/Button";

import { getJobByIdThunk } from "../features/jobs/jobsSlice";
import {
  applyJobThunk,
  getApplicationsThunk,
} from "../features/applications/applicationSlice";

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
    return (
      <>
        <DashboardNavbar />
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center">
          <h2 className="text-xl text-gray-700 dark:text-gray-300">
            Loading...
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition"
          >
            ← Back to Jobs
          </button>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {selectedJob.title}
            </h1>

            <h2 className="text-xl text-gray-600 dark:text-gray-400 mt-2">
              {selectedJob.companyName}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Location
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  {selectedJob.location}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Job Type
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  {selectedJob.jobType}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Salary
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  {selectedJob.salary}
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Experience
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  {selectedJob.experience || "-"}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Job Description
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                {selectedJob.description}
              </p>
            </div>

            {selectedJob.skills && (
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Skills Required
                </h3>

                <div className="flex flex-wrap gap-3">
                  {selectedJob.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full"
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
      </div>
    </>
  );
};

export default JobDetails;