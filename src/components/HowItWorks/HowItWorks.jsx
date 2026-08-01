import { howItWorks } from "../../utils/constants";
import { howItWorksStyles as styles } from "./howItWorksStyles";

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          How CareerConnect Works
        </h2>

        <p className={styles.subHeading}>
          Start your career journey in three simple steps.
        </p>

        <div className={styles.grid}>
          {howItWorks.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className={styles.card}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>

                <h3 className={styles.title}>
                  {step.title}
                </h3>

                <p className={styles.description}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;