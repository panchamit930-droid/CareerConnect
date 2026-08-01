import { jobCardStyles as styles } from "./jobCardStyles";

const JobCard = ({ job }) => {
  return (
    <div className={styles.card}>
      <p className={styles.company}>{job.company}</p>

      <h3 className={styles.title}>{job.title}</h3>

      <div className={styles.details}>
        <p>📍 {job.location}</p>
        <p>💰 {job.salary}</p>
      </div>

      <span className={styles.badge}>{job.type}</span>

      <button className={styles.button}>
        View Details
      </button>
    </div>
  );
};

export default JobCard;