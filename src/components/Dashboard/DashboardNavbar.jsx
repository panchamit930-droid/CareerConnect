import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon } from "react-icons/fa";
import { logoutUserThunk } from "../../features/auth/authSlice";

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
    navigate("/");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">CareerConnect</h1>

        <nav className="flex items-center gap-8">
          {currentUser?.role === "jobSeeker" ? (
            <>
              <NavLink to="/jobseeker/dashboard">Dashboard</NavLink>

              <NavLink to="/jobs">Jobs</NavLink>

              <NavLink to="/my-applications">Applications</NavLink>

              <NavLink to="/profile">Profile</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/employer/dashboard">Dashboard</NavLink>

              <NavLink to="/post-job">Post Job</NavLink>

              <NavLink to="/manage-jobs">Manage Jobs</NavLink>

              <NavLink to="/profile">Profile</NavLink>
            </>
          )}

          <FaMoon className="cursor-pointer text-lg" />

          <span className="font-medium">
            Hi, {currentUser?.fullName || currentUser?.companyName}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default DashboardNavbar;
