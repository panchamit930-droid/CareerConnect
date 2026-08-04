import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import { getApplicationsThunk } from "../features/applications/applicationSlice";

const MyApplications = () => {
  const dispatch = useDispatch();

  const { applications, loading } = useSelector((state) => state.applications);

  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getApplicationsThunk());
  }, [dispatch]);

  const myApplications = applications.filter(
    (application) => application.applicantId === currentUser.id,
  );

  return (
    <>
      <DashboardNavbar />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">My Applications</h1>

        <p className="text-gray-500 mb-8">
          Track all the jobs you've applied for.
        </p>

        {loading ? (
          <h2>Loading...</h2>
        ) : myApplications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <div className="space-y-4">
            {myApplications.map((application) => (
              <div
                key={application.id}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-5"
              >
                <h2 className="text-xl font-semibold">
                  {application.jobTitle}
                </h2>

                <p className="text-gray-500">{application.companyName}</p>

                <div className="mt-3 flex justify-between">
                  <span>Applied: {application.appliedDate}</span>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      application.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : application.status === "Shortlisted"
                          ? "bg-blue-100 text-blue-700"
                          : application.status === "Interview Scheduled"
                            ? "bg-purple-100 text-purple-700"
                            : application.status === "Selected"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
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
    </>
  );
};

export default MyApplications;
