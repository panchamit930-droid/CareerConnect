import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import StatsCard from "../components/Dashboard/StatsCard";
import WelcomeCard from "../components/Dashboard/WelcomeCard";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";

const JobSeekerDashboard = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { applications } = useSelector((state) => state.applications);

  const myApplications = applications.filter(
    (application) => application.applicantId === currentUser.id,
  );

  const appliedJobs = myApplications.length;

  const pending = myApplications.filter(
    (application) => application.status === "Pending",
  ).length;

  const shortlisted = myApplications.filter(
    (application) => application.status === "Shortlisted",
  ).length;

  const selected = myApplications.filter(
    (application) => application.status === "Selected",
  ).length;

  const rejected = myApplications.filter(
    (application) => application.status === "Rejected",
  ).length;

  return (
    <>
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeCard />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
          <StatsCard title="Applied Jobs" value={appliedJobs} />

          <StatsCard title="Pending" value={pending} />

          <StatsCard title="Shortlisted" value={shortlisted} />

          <StatsCard title="Selected" value={selected} />

          <StatsCard title="Rejected" value={rejected} />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Browse Jobs */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold">Browse Jobs</h2>

            <p className="text-gray-500 mt-3">
              Explore the latest job opportunities.
            </p>

            <NavLink
              to="/jobs"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              Browse Jobs
            </NavLink>
          </div>

          {/* My Applications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold">My Applications</h2>

            <p className="text-gray-500 mt-3">View jobs you've applied for.</p>

            <NavLink
              to="/my-applications"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              View Applications
            </NavLink>
          </div>

          {/* Profile */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold">Profile</h2>

            <p className="text-gray-500 mt-3">
              Update your profile information.
            </p>

            <button
              disabled
              className="mt-6 bg-gray-400 text-white px-5 py-2 rounded-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSeekerDashboard;
