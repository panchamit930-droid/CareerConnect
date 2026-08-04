import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import ApplicantCard from "../components/Applications/ApplicantCard";

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

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold">Applicants</h1>

        <p className="text-gray-500 mt-2">
          Total Applicants: {jobApplications.length}
        </p>

        {loading ? (
          <h2 className="mt-8">Loading...</h2>
        ) : jobApplications.length === 0 ? (
          <h2 className="mt-8 text-gray-500">No applicants yet.</h2>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
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
    </>
  );
};

export default Applicants;
