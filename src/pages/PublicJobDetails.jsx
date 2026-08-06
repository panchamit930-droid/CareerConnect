import { useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PublicJobDetails = () => {
  const { id } = useParams();

  const { jobs } = useSelector((state) => state.jobs);

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Job not found.
          </h2>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {job.title}
            </h1>

            <div className="mt-6 space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">
                  Company:
                </strong>{" "}
                {job.companyName}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">
                  Location:
                </strong>{" "}
                {job.location}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">
                  Job Type:
                </strong>{" "}
                {job.jobType}
              </p>

              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-gray-900 dark:text-white">
                  Salary:
                </strong>{" "}
                {job.salary}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Job Description
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                {job.description}
              </p>
            </div>

            {job.skills && job.skills.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Skills Required
                </h3>

                <div className="flex flex-wrap gap-3">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10">
              <NavLink
                to="/login"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
              >
                Login to Apply
              </NavLink>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Please login as a Job Seeker to apply for this job.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PublicJobDetails;
