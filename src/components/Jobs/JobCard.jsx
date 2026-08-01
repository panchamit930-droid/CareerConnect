import { useDispatch } from "react-redux";
import { deleteJobThunk } from "../../features/jobs/jobsSlice";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this job?");

    if (confirmDelete) {
      dispatch(deleteJobThunk(job.id));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold">{job.title}</h2>

      <p className="mt-2 text-gray-500">{job.companyName}</p>

      <p className="mt-2">📍 {job.location}</p>

      <p>💼 {job.jobType}</p>

      <p>💰 {job.salary}</p>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => navigate(`/edit-job/${job.id}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
