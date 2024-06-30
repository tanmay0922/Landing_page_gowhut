import styles from '../styles/StepsSection.module.css';

function StepsSection() {
  return (
    <section className={styles.steps}>
      <h2>Getting Started is as Easy as 1-2-3:</h2>
      <div className={styles.stepsContent}>
        <div className={styles.imageContainer}>
          <img src="/step-image.png" alt="Step Image" className={styles.stepsImage} />
        </div>
        <div className={styles.stepsList}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <p>Login and provide university details</p>
              <span>It takes less than 5 minutes!</span>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <p>Add your university branding to the payment page</p>
              <span>In just a few clicks!</span>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <p>Generate and send payment link to students</p>
              <span>It's that simple!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
