import DashboardNavbar from "../components/Dashboard/DashboardNavbar"
import DashboardSidebar from "../components/Dashboard/DashboardSidebar"
import WelcomeCard from "../components/Dashboard/WelcomeCard"
import StatsCard from "../components/Dashboard/StatsCard"
import JobCard from "../components/Dashboard/JobCard"


const EmployerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      <DashboardNavbar />

      <div className="flex">

        <main className="flex-1 p-6">

          <WelcomeCard />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

            <StatsCard title="Applied Jobs" value="12" />

            <StatsCard title="Saved Jobs" value="8" />

            <StatsCard title="Interviews" value="3" />

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold mb-5">
              Featured Jobs
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <JobCard />

              <JobCard />

              <JobCard />

              <JobCard />

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default EmployerDashboard;