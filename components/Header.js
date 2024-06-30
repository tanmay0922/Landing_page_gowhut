import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/eddflix-logo.png" alt="Eddflix Logo" />
      </div>
      <nav className={styles.nav}>
      <span className={styles.navItem}>
          <span className={styles.navLinkUniversity}>University</span>
          <span className={styles.separator}>|</span>
          <span className={styles.arrow}></span>
        </span>
        <span className={styles.navItem}>
          <span className={styles.navLinkAgency}>Agency</span>
          <span className={styles.arrow}></span>
        </span>
      </nav>
      <Link href="/steps">
        <button className={styles.getStartedButton}>Get Started</button>
      </Link>
    </header>
  );
}

export default Header;
