import { heroStyles as styles } from "./heroStyles";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import heroImage from "../../assets/images/hero3.png";

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <span className={styles.badge}>
            🚀 Your Career Starts Here
          </span>

          <h1 className={styles.heading}>
            Find Your{" "}
            <span className={styles.highlight}>Dream Job</span> Today
          </h1>

          <p className={styles.description}>
            Discover thousands of opportunities from leading companies and
            take the next step in your career journey with CareerConnect.
          </p>

          {/* Search */}
          {/* <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search jobs..."
              className={styles.input}
            />

            <button className={styles.searchButton}>
              <FaSearch />
            </button>
          </div> */}

          {/* Buttons */}
          <div className={styles.buttons}>
            <NavLink to="/jobs" className={styles.browseButton}>
              Browse Jobs
            </NavLink>

            <NavLink to="/register" className={styles.registerButton}>
              Get Started
            </NavLink>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <img
            src={heroImage}
            alt="Career"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;