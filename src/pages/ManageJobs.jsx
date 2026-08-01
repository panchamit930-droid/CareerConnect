import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import JobList from "../components/Jobs/JobList";

const ManageJobs = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="max-w-6xl mx-auto px-5 py-8">
        <h1 className="text-3xl font-bold mb-2">Manage Jobs</h1>

        <p className="text-gray-500 mb-8">
          View, edit and delete your job postings.
        </p>

        <JobList />
      </div>
    </>
  );
};

export default ManageJobs;
