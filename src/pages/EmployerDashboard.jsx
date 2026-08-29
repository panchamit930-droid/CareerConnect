import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import StatsCard from "../components/Dashboard/StatsCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { getJobsThunk } from "../features/jobs/jobsSlice";
import { getApplicationsThunk } from "../features/applications/applicationSlice";

import WelcomeCard from "../components/Dashboard/WelcomeCard";
import EmployerJobCard from "../components/Jobs/EmployerJobCard";
import EmptyState from "../components/common/EmptyState";
import {
  FaBriefcase,
  FaUsers,
  FaUserCheck,
  FaCheckCircle,
} from "react-icons/fa";

const EmployerDashboard = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { jobs } = useSelector((state) => state.jobs);
  const { applications } = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(getJobsThunk());
    dispatch(getApplicationsThunk());
  }, [dispatch]);

  const employerJobs = jobs.filter((job) => job.employerId === currentUser.id);

  const jobsPosted = employerJobs.length;

  const recentJobs = [...employerJobs].reverse().slice(0, 3);

  const totalApplicants = applications.filter(
    (application) => application.employerId === currentUser.id,
  ).length;

  const shortlisted = applications.filter(
    (application) =>
      application.employerId === currentUser.id &&
      application.status === "Shortlisted",
  ).length;

  const selected = applications.filter(
    (application) =>
      application.employerId === currentUser.id &&
      application.status === "Selected",
  ).length;

  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <WelcomeCard />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <StatsCard title="Jobs Posted" value={jobsPosted} icon={<FaBriefcase />} />
            <StatsCard title="Applicants" value={totalApplicants} icon={<FaUsers />} />
            <StatsCard title="Shortlisted" value={shortlisted} icon={<FaUserCheck />}/>
            <StatsCard title="Selected" value={selected} icon={<FaCheckCircle />} />
          </div>

          <div className="mt-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Recent Job Posts
              </h2>

              <NavLink
                to="/manage-jobs"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View All →
              </NavLink>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Your latest job postings.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {recentJobs.length > 0 ? (
                recentJobs.map((job) => (
                  <EmployerJobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="md:col-span-2">
                  <EmptyState
                    icon="💼"
                    title="No Jobs Posted Yet"
                    description="Start hiring by posting your first job."
                    buttonText="Post Job"
                    buttonLink="/post-job"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;
