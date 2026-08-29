import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navbarStyles as styles } from "./navbarStyles";
import ThemeToggle from "../common/ThemeToggle/ThemeToggle";
import { FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink;

  const getMobileNavLinkClass = ({ isActive }) =>
    isActive
      ? `${styles.mobileLink} ${styles.activeMobileLink}`
      : styles.mobileLink;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <NavLink to="/" className={styles.logo}>
          <FaBriefcase className="text-blue-600 text-2xl" />
          <span>CareerConnect</span>
        </NavLink>

       
        <nav className={styles.nav}>
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>

          <NavLink to="/explore-jobs" className={getNavLinkClass}>
            Jobs
          </NavLink>

          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
        </nav>

      
        <div className={styles.buttonContainer}>
  
          <ThemeToggle />

          <NavLink to="/login" className={styles.loginBtn}>
            Login
          </NavLink>

          <NavLink to="/register" className={styles.registerBtn}>
            Register
          </NavLink>
        </div>

        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

     
      {isOpen && (
        <div className={styles.mobileMenu}>
          <NavLink
            to="/"
            className={getMobileNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={getMobileNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Jobs
          </NavLink>

          <NavLink
            to="/about"
            className={getMobileNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/login"
            className={getMobileNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={getMobileNavLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Register
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
