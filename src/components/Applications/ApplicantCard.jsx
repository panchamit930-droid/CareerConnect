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
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <p>Loading applicant...</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      {/* Applicant Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          {applicant.fullName?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-semibold">{applicant.fullName}</h2>

          <p className="text-gray-500">{applicant.email}</p>
        </div>
      </div>

      {/* Optional Details */}
      <div className="mt-5 space-y-2">
        <p>
          <span className="font-semibold">Education:</span>{" "}
          {applicant.education || "-"}
        </p>

        <p>
          <span className="font-semibold">Location:</span>{" "}
          {applicant.location || "-"}
        </p>

        <p>
          <span className="font-semibold">Experience:</span>{" "}
          {applicant.experience || "-"}
        </p>
      </div>

      {/* Status */}
      <div className="mt-6">
        <label className="block font-medium mb-2">Application Status</label>

        <select
          value={application.status}
          onChange={handleStatusChange}
          className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700"
        >
          <option value="Pending">Pending</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* View Profile */}
      <NavLink
        to={`/applicant/${applicant.id}`}
        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        View Profile
      </NavLink>
    </div>
  );
};

export default ApplicantCard;
