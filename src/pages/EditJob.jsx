import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import JobForm from "../components/Jobs/JobForm";

const EditJob = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="max-w-4xl mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold mb-2">Edit Job</h1>

        <p className="text-gray-500 mb-8">Update the job details below.</p>

        <JobForm />
      </div>
    </>
  );
};

export default EditJob;
