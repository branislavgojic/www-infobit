import styles from './Cards.module.scss';
import Computer from '../../assets/images/content/computer.svg?react';
import Head from '../../assets/images/content/head.svg?react';
import Reliable from '../../assets/images/content/reliable.svg?react';

function Cards() {
  return (
    <div className={styles.section}>
      <div className={styles.item}>
        <Computer />
        <h2>Custom Software Solutions</h2>
        <p>Tailored software development to meet your unique business needs.</p>
      </div>
      <div className={styles.item}>
        <Head />
        <h2>Innovative Development</h2>
        <p>
          We bring your ideas to life with cutting-edge technology and creative
          solutions.
        </p>
      </div>
      <div className={styles.item}>
        <Reliable />
        <h2>Scalable & Reliable</h2>
        <p>
          Building software that grows with your business and performs
          consistently.
        </p>
      </div>
    </div>
  );
}

export default Cards;
