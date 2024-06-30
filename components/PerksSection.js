import styles from '../styles/PerksSection.module.css';

function PerksSection() {
  return (
    <section className={styles.perks}>
      <h2>Perks you can give to incoming students</h2>
      <div className={styles.perksContent}>
        <img src="/students.png" alt="Students" className={styles.perksImage} />
        <div className={styles.perksList}>
          <div className={styles.perk}>
            <img src="/check-icon.png" alt="Check" />
            <p>Pre-arrival financial setup</p>
          </div>
          <div className={styles.perk}>
            <img src="/check-icon.png" alt="Check" />
            <p>Low-fee international transfers</p>
          </div>
          <div className={styles.perk}>
            <img src="/check-icon.png" alt="Check" />
            <p>Branded, familiar payment experience</p>
          </div>
          <div className={styles.perk}>
            <img src="/check-icon.png" alt="Check" />
            <p>Instant fund access upon arrival</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerksSection;
