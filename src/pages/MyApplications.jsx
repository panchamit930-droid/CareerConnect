import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyState from "../components/common/EmptyState";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import { getApplicationsThunk } from "../features/applications/applicationSlice";
import { getJobsThunk } from "../features/jobs/jobsSlice";

const MyApplications = () => {
  const dispatch = useDispatch();

  const { applications, loading } = useSelector((state) => state.applications);

  const { currentUser } = useSelector((state) => state.auth);

  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getApplicationsThunk());
    dispatch(getJobsThunk());
  }, [dispatch]);

  const myApplications = applications
    .filter((application) => application.applicantId === currentUser.id)
    .map((application) => ({
      ...application,
      job: jobs.find((job) => job.id === application.jobId),
    }));

  return (
    <>
      <DashboardNavbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Applications
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Track all the jobs you've applied for.
          </p>

          {loading ? (
            <h2 className="py-10 text-center text-lg text-gray-500 dark:text-gray-400">
              Loading applications...
            </h2>
          ) : myApplications.length === 0 ? (
            <EmptyState
              icon="📄"
              title="No Applications Yet"
              description="Browse jobs and submit your first application."
              buttonText="Browse Jobs"
              buttonLink="/jobs"
            />
          ) : (
            <div className="space-y-4">
              {myApplications.map((application) => (
                <div
                  key={application.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {application.job?.title}
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400">
                    {application.job?.companyName}
                  </p>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    📍 {application.job?.location}
                  </p>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    💼 {application.job?.jobType}
                  </p>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    💰 {application.job?.salary}
                  </p>

                  <div className="mt-3 flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Applied: {application.appliedDate}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        application.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                          : application.status === "Shortlisted"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            : application.status === "Interview Scheduled"
                              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                              : application.status === "Selected"
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                      }`}
                    >
                      {application.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyApplications;
