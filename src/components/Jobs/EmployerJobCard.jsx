import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { deleteJobThunk } from "../../features/jobs/jobsSlice";

const EmployerJobCard = ({ job }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this job?");

    if (confirmDelete) {
      dispatch(deleteJobThunk(job.id));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 transition hover:shadow-xl">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {job.title}
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mt-2">{job.companyName}</p>

      <div className="mt-4 space-y-2">
        <p className="text-gray-700 dark:text-gray-300">📍 {job.location}</p>

        <p className="text-gray-700 dark:text-gray-300">💼 {job.jobType}</p>

        <p className="text-gray-700 dark:text-gray-300">💰 {job.salary}</p>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          onClick={() => navigate(`/edit-job/${job.id}`)}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

        <NavLink
          to={`/jobs/${job.id}/applicants`}
          className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded-lg"
        >
          View Applicants
        </NavLink>
      </div>
    </div>
  );
};

export default EmployerJobCard;
