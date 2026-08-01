
const JobCard = ({ job, isEmployer = true }) => {
  return (

    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">

      <h3 className="text-xl font-semibold">
        React Developer
      </h3>

      <p className="text-gray-500 mt-2">
        Tech Solutions Pvt Ltd
      </p>

      <p className="mt-4 text-sm">
        Kochi • Full Time • ₹6 LPA
      </p>

      <div className="flex gap-3 mt-6">

  {isEmployer ? (
    <>
      <button
        onClick={() => navigate(`/edit-job/${job.id}`)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Edit
      </button>

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    </>
  ) : (
    <button
      className="bg-green-600 text-white px-5 py-2 rounded-lg"
    >
      Apply Now
    </button>
  )}

</div>

    </div>

  );
};

export default JobCard;