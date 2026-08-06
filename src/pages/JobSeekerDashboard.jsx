import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  FaBriefcase,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaStar,
} from "react-icons/fa";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import WelcomeCard from "../components/Dashboard/WelcomeCard";
import StatsCard from "../components/Dashboard/StatsCard";
import JobSeekerJobCard from "../components/Jobs/JobSeekerJobCard";

import { getApplicationsThunk } from "../features/applications/applicationSlice";
import { getJobsThunk } from "../features/jobs/jobsSlice";

const JobSeekerDashboard = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { applications } = useSelector((state) => state.applications);
  const { jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getApplicationsThunk());
    dispatch(getJobsThunk());
  }, [dispatch]);

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

  const recentJobs = [...jobs].reverse().slice(0, 3);

  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Greeting */}
          {/* <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome back,
              <span className="text-blue-600"> {currentUser?.fullName}</span>
              👋
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Track your applications and discover new career opportunities.
            </p>
          </div> */}

          <WelcomeCard />

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
            <StatsCard
              title="Applied Jobs"
              value={appliedJobs}
              icon={<FaBriefcase />}
            />

            <StatsCard title="Pending" value={pending} icon={<FaClock />} />

            <StatsCard
              title="Shortlisted"
              value={shortlisted}
              icon={<FaStar />}
            />

            <StatsCard
              title="Selected"
              value={selected}
              icon={<FaCheckCircle />}
            />

            <StatsCard
              title="Rejected"
              value={rejected}
              icon={<FaTimesCircle />}
            />
          </div>

          {/* Quick Actions */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Actions
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
                <div className="text-4xl mb-4">💼</div>

                <h3 className="text-xl font-semibold dark:text-white">
                  Browse Jobs
                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-3">
                  Explore the latest opportunities from top companies.
                </p>

                <NavLink
                  to="/jobs"
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
                >
                  Browse Jobs
                </NavLink>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
                <div className="text-4xl mb-4">📄</div>

                <h3 className="text-xl font-semibold dark:text-white">
                  My Applications
                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-3">
                  Check the status of every job you've applied for.
                </p>

                <NavLink
                  to="/my-applications"
                  className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition"
                >
                  View Applications
                </NavLink>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">
                <div className="text-4xl mb-4">👤</div>

                <h3 className="text-xl font-semibold dark:text-white">
                  My Profile
                </h3>

                <p className="text-gray-500 dark:text-gray-400 mt-3">
                  Update your profile to attract more recruiters.
                </p>

                <NavLink
                  to="/profile"
                  className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition"
                >
                  Edit Profile
                </NavLink>
              </div>
            </div>
          </div>

          {/* Latest Jobs */}
          <div className="mt-14">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-bold dark:text-white">
                  Latest Opportunities
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Fresh job openings from trusted companies.
                </p>
              </div>

              <NavLink
                to="/jobs"
                className="text-blue-600 font-semibold hover:underline"
              >
                View All →
              </NavLink>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentJobs.map((job) => (
                <JobSeekerJobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSeekerDashboard;
