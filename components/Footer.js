import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        <p>Join Eddflix & harness the power of education to<br />"change the world, one payment at a time"</p>
        <button className={styles.ctaButton}>Start Changing the World</button>
        <div className={styles.links}>
        <div className={styles.logo}>
          <img src="/eddflix-logo.png" alt="Eddflix Logo" />
        </div>
          <a href="/university">University</a>
          <span className={styles.separator}>|</span>
          <a href="/agency">Agency</a>
      
        <div className={styles.socialIcons}>
          <img src="/facebook-icon.png" alt="Facebook" />
          <img src="/instagram-icon.png" alt="Instagram" />
          <img src="/twitter-icon.png" alt="Twitter" />
          <img src="/linkedin-icon.png" alt="LinkedIn" />
        </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>2024 All rights reserved. <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/cookies">Cookies Settings</a></p>
      </div>
    </footer>
  );
}

export default Footer;
