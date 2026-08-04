import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import StatsCard from "../components/Dashboard/StatsCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobsThunk } from "../features/jobs/jobsSlice";
import { getApplicationsThunk } from "../features/applications/applicationSlice";
import WelcomeCard from "../components/Dashboard/WelcomeCard";

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
          <h2 className="text-2xl font-semibold">Your Posted Jobs</h2>

          <p className="text-gray-500 mt-3">
            Here you can view and manage all the jobs you've posted.
          </p>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;
