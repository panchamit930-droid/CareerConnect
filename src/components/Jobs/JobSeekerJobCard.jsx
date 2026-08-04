import { useDispatch, useSelector } from "react-redux";
import { applyJobThunk } from "../../features/applications/applicationSlice";
import { NavLink } from "react-router-dom";

const JobSeekerJobCard = ({ job }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const { loading } = useSelector((state) => state.applications);

  const handleApply = async () => {
    const result = await dispatch(
      applyJobThunk({
        jobId: job.id,
        employerId: job.employerId,
        applicantId: currentUser.id,
      }),
    );

    if (applyJobThunk.fulfilled.match(result)) {
      alert("Application submitted successfully!");
    } else {
      alert(result.payload);
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold">{job.title}</h2>

      <p className="text-gray-500 mt-2">{job.companyName}</p>

      <p className="mt-3">📍 {job.location}</p>

      <p>💼 {job.jobType}</p>

      <p>💰 {job.salary}</p>

      <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleApply}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Applying..." : "Apply Now"}
        </button>

        <NavLink
          to={`/jobs/${job.id}`}
          className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default JobSeekerJobCard;
