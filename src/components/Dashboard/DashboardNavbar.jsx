import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUserThunk } from "../../features/auth/authSlice";
import { navbarStyles as styles } from "../Navbar/navbarStyles";
import ThemeToggle from "../common/ThemeToggle/ThemeToggle";

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          CareerConnect
        </NavLink>

        <nav className={styles.nav}>
          {currentUser?.role === "jobSeeker" ? (
            <>
              <NavLink
                to="/jobseeker/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Jobs
              </NavLink>

              <NavLink
                to="/my-applications"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                My Applications
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Profile
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/employer/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/post-job"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Post Job
              </NavLink>

              <NavLink
                to="/manage-jobs"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
              >
                Manage Jobs
              </NavLink>
            </>
          )}
        </nav>

        <div className={styles.buttonContainer}>
          <ThemeToggle />
        
          <span className="font-medium dark:text-white">
            Hi, {currentUser?.fullName || currentUser?.companyName}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
