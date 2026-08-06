import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import StatsCard from "../components/Dashboard/StatsCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobsThunk } from "../features/jobs/jobsSlice";
import { getApplicationsThunk } from "../features/applications/applicationSlice";
import WelcomeCard from "../components/Dashboard/WelcomeCard";
import EmployerJobCard from "../components/Jobs/EmployerJobCard";
import { NavLink } from "react-router-dom";
import EmptyState from "../components/common/EmptyState";

const EmployerDashboard = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { jobs } = useSelector((state) => state.jobs);

  const { applications } = useSelector((state) => state.applications);

  const dispatch = useDispatch();

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

      <div className="max-w-7xl mx-auto px-6 py-8">
        <WelcomeCard />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <StatsCard title="Jobs Posted" value={jobsPosted} />

          <StatsCard title="Applicants" value={totalApplicants} />

          <StatsCard title="Shortlisted" value={shortlisted} />

          <StatsCard title="Selected" value={selected} />
        </div>

        <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Recent Job Posts</h2>

            <NavLink
              to="/manage-jobs"
              className="text-blue-600 hover:underline"
            >
              View All →
            </NavLink>
          </div>

          <p className="text-gray-500 mt-2">Your latest job postings.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {recentJobs.length > 0 ? (
              recentJobs.map((job) => (
                <EmployerJobCard key={job.id} job={job} />
              ))
            ) : (
              <EmptyState
                icon="💼"
                title="No Jobs Posted Yet"
                description="Start hiring by posting your first job."
                buttonText="Post Job"
                buttonLink="/post-job"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;
