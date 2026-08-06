import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { applyJobThunk } from "../../features/applications/applicationSlice";

const JobSeekerJobCard = ({ job }) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { loading, applications } = useSelector((state) => state.applications);

  const alreadyApplied = applications.some(
    (application) =>
      application.jobId === job.id &&
      application.applicantId === currentUser.id,
  );

  const handleApply = async () => {
    const result = await dispatch(
      applyJobThunk({
        jobId: job.id,
        employerId: job.employerId,
        applicantId: currentUser.id,
      }),
    );

    if (applyJobThunk.fulfilled.match(result)) {
      toast.success("Application submitted successfully!");
    } else {
      toast.error(result.payload || "Failed to apply.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {job.title}
      </h2>

      <p className="mt-1 text-blue-600 dark:text-blue-400 font-medium">
        {job.companyName}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm">
          📍 {job.location}
        </span>

        <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-sm">
          💼 {job.jobType}
        </span>

        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm">
          💰 {job.salary}
        </span>
      </div>

      <p className="mt-5 text-gray-600 dark:text-gray-300 line-clamp-3">
        {job.description}
      </p>

      <div className="flex gap-3 mt-8">
        <button
          onClick={handleApply}
          disabled={loading || alreadyApplied}
          className={`flex-1 py-3 rounded-xl font-semibold transition
            ${
              alreadyApplied
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
        >
          {alreadyApplied ? "Applied" : loading ? "Applying..." : "Apply Now"}
        </button>

        <NavLink
          to={`/jobs/${job.id}`}
          className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default JobSeekerJobCard;
