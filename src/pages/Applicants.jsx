import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import ApplicantCard from "../components/Applications/ApplicantCard";
import EmptyState from "../components/common/EmptyState";

import { getApplicationsThunk } from "../features/applications/applicationSlice";
import { getUsersThunk } from "../features/users/userSlice";

const Applicants = () => {
  const dispatch = useDispatch();
  const { jobId } = useParams();

  const { applications, loading } = useSelector((state) => state.applications);

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getApplicationsThunk());
    dispatch(getUsersThunk());
  }, [dispatch]);

  const jobApplications = applications.filter(
    (application) => application.jobId === Number(jobId),
  );

  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Applicants
            </h1>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Total Applicants:
              <span className="ml-2 font-semibold text-blue-600 dark:text-blue-400">
                {jobApplications.length}
              </span>
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Loading applicants...
              </p>
            </div>
          ) : jobApplications.length === 0 ? (
            <EmptyState
              icon="👥"
              title="No Applicants Yet"
              description="Applications will appear here once candidates apply for this job."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobApplications.map((application) => {
                const applicant = users.find(
                  (user) => user.id === application.applicantId,
                );

                return (
                  <ApplicantCard
                    key={application.id}
                    application={application}
                    applicant={applicant}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Applicants;
