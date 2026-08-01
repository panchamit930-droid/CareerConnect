import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import { useSelector } from "react-redux";

const EmployerDashboard = () => {
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <>
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold">
          Welcome, {currentUser?.companyName} 👋
        </h1>

        <p className="text-gray-500 mt-2">Manage your job postings here.</p>

        <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow p-8">
          <h2 className="text-2xl font-semibold">Your Posted Jobs</h2>

          <p className="text-gray-500 mt-3">No jobs posted yet.</p>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;
