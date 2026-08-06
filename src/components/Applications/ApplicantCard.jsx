import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { updateApplicationStatusThunk } from "../../features/applications/applicationSlice";

const ApplicantCard = ({ application, applicant }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    dispatch(
      updateApplicationStatusThunk({
        applicationId: application.id,
        status: e.target.value,
      }),
    );
  };

  if (!applicant) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading applicant...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow">
          {applicant.fullName?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {applicant.fullName}
          </h2>

          <p className="text-gray-500 dark:text-gray-400">
            {applicant.email}
          </p>
        </div>
      </div>

      {/* Applicant Details */}
      <div className="mt-6 space-y-3">
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-gray-900 dark:text-white">
            Education:
          </span>{" "}
          {applicant.education || "-"}
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-gray-900 dark:text-white">
            Location:
          </span>{" "}
          {applicant.location || "-"}
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-gray-900 dark:text-white">
            Experience:
          </span>{" "}
          {applicant.experience || "-"}
        </p>
      </div>

      {/* Status */}
      <div className="mt-6">
        <label className="block mb-2 font-semibold text-gray-900 dark:text-white">
          Application Status
        </label>

        <select
          value={application.status}
          onChange={handleStatusChange}
          className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="Pending">Pending</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Interview Scheduled">
            Interview Scheduled
          </option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Button */}
      <NavLink
        to={`/applicant/${applicant.id}`}
        className="mt-6 inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-5 py-3 rounded-full shadow hover:shadow-lg"
      >
        View Full Profile
      </NavLink>
    </div>
  );
};

export default ApplicantCard;