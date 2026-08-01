import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow min-h-screen">

      <div className="p-6 space-y-4">

        <NavLink
          to="/jobseeker/dashboard"
          className="block hover:text-blue-600"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/jobs"
          className="block hover:text-blue-600"
        >
          Browse Jobs
        </NavLink>

        <NavLink
          to="/applications"
          className="block hover:text-blue-600"
        >
          My Applications
        </NavLink>

        <NavLink
          to="/profile"
          className="block hover:text-blue-600"
        >
          Profile
        </NavLink>

      </div>

    </aside>
  );
};

export default DashboardSidebar;