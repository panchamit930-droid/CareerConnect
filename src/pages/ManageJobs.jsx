import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import JobList from "../components/Jobs/JobList";

const ManageJobs = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Manage Jobs
          </h1>

          <p className="mt-2 mb-8 text-gray-600 dark:text-gray-400">
            View, edit and delete your job postings.
          </p>

          <JobList />
        </div>
      </div>
    </>
  );
};

export default ManageJobs;