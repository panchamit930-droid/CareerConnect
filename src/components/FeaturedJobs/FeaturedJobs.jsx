import JobCard from "../common/JobCard/JobCard";
import { featuredJobs } from "../../utils/constants";
import { featuredJobsStyles as styles } from "./featuredJobsStyles";

const FeaturedJobs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Featured Jobs
        </h2>

        <p className={styles.subHeading}>
          Explore some of the latest opportunities from top companies.
        </p>

        <div className={styles.grid}>
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;