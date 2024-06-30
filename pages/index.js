import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PerksSection from '../components/PerksSection';
import StepsSection from '../components/StepsSection';
import BenefitsSection from '../components/BenefitsSection';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <PerksSection />
        <StepsSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
