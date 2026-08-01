import { NavLink } from "react-router-dom";
import { ctaStyles as styles } from "./ctaStyles";

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Ready to Take the Next Step?
        </h2>

        <p className={styles.description}>
          Whether you're searching for your dream job or looking for the
          perfect candidate, CareerConnect makes hiring and job searching
          simple, fast, and efficient.
        </p>

        <NavLink to="/register" className={styles.button}>
          Get Started Today
        </NavLink>
      </div>
    </section>
  );
};

export default CTA;