import { NavLink } from "react-router-dom";

const PublicJobCard = ({ job }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
      {/* Job Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {job.title}
      </h2>

      {/* Company */}
      <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
        {job.companyName}
      </p>

      {/* Job Details */}
      <div className="flex flex-wrap gap-2 mt-5">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
          📍 {job.location}
        </span>

        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">
          💼 {job.jobType}
        </span>

        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-sm">
          💰 {job.salary}
        </span>
      </div>

      {/* Description */}
      <p className="mt-5 text-gray-600 dark:text-gray-300 line-clamp-3">
        {job.description}
      </p>

      {/* CTA */}
      <NavLink
        to={`/job/${job.id}`}
        className="block mt-8 w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default PublicJobCard;
