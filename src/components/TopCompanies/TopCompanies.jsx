import { topCompanies } from "../../utils/constants";
import { topCompaniesStyles as styles } from "./topCompaniesStyles";

const TopCompanies = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Top Companies Hiring
        </h2>

        <p className={styles.subHeading}>
          Explore opportunities from leading companies.
        </p>

        <div className={styles.grid}>
          {topCompanies.map((company) => (
            <div
              key={company.id}
              className={styles.card}
            >
              <div
                className={`${styles.avatar} ${company.bgColor}`}
              >
                {company.shortName}
              </div>

              <h3 className={styles.name}>
                {company.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;