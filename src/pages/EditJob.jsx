import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import JobForm from "../components/Jobs/JobForm";

const EditJob = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <DashboardNavbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Edit Job
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Update your job posting with the latest information before
            publishing.
          </p>
        </div>

        <JobForm />
      </div>
    </div>
  );
};

export default EditJob;
