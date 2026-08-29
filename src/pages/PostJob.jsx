import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import JobForm from "../components/Jobs/JobForm";

const PostJob = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Post a New Job
          </h1>

          <p className="mt-2 mb-8 text-gray-600 dark:text-gray-400">
            Fill in the job details below to publish your job posting.
          </p>

          <JobForm />
        </div>
      </div>
    </>
  );
};

export default PostJob;
