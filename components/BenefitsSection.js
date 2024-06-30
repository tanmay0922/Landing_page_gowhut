import styles from '../styles/BenefitsSection.module.css';

function BenefitsSection() {
  return (
    <section className={styles.benefits}>
      <h2>From the moment they accept your offer, your students can enjoy:</h2>
      <div className={styles.benefitsList}>
        <div className={styles.benefit}>
          <img src="/benefit1.png" alt="Benefit 1" />
         
        </div>
        <div className={styles.benefit}>
          <img src="/benefit2.png" alt="Benefit 2" />
          
        </div>
        <div className={styles.benefit}>
          <img src="/benefit3.png" alt="Benefit 3" />
          
        </div>
      </div>
      <div className={styles.poweredBy}>
        <p>Powered by <img src="/visa.png" alt="Visa" /> & <img src="/mastercard.png" alt="Mastercard" /></p>
        <p>Provide students with globally accepted debit cards and secure payment options.</p>
      </div>
    </section>
  );
}

export default BenefitsSection;
