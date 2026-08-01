import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { footerStyles as styles } from "./footerStyles";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company */}
          <div>
            <h2 className={styles.logo}>CareerConnect</h2>

            <p className={styles.description}>
              Connecting talented professionals with leading employers
              and helping careers grow every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.heading}>Quick Links</h3>

            <ul className={styles.list}>
              <li>
                <NavLink to="/" className={styles.link}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/jobs" className={styles.link}>
                  Jobs
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={styles.link}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={styles.heading}>Resources</h3>

            <ul className={styles.list}>
              <li>
                <NavLink to="/login" className={styles.link}>
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink to="/register" className={styles.link}>
                  Register
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={styles.heading}>Contact</h3>

            <p className="text-gray-400">
              support@careerconnect.com
            </p>

            <div className={styles.social}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          © {new Date().getFullYear()} CareerConnect. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;