import styles from './MainLayout.module.scss';
import Cshape from '../../assets/images/background/circle.svg?react';
import {
  Banner,
  Cards,
  Collaboration,
  ContactForm,
  Footer,
  Header,
} from '../../components';

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Cshape className={`${styles.cshape} ${styles.first}`} />
      <Cshape className={`${styles.cshape} ${styles.second}`} />
      <Cshape className={`${styles.cshape} ${styles.third}`} />
      <div className={styles.container}>
        <Header />
        <Banner />
        <Collaboration />
        <Cards />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
