import styles from './Collaboration.module.scss';

function Collaboration() {
  return (
    <div className={styles.section}>
      <div className={styles.cell}>
        <h1>Collaborating for Success</h1>
      </div>
      <div className={styles.cell}>
        <p>
          We believe that collaboration is key to successful software
          development. We work closely with our clients throughout the entire
          process, from initial consultation to final deployment, ensuring that
          your voice is heard and your needs are met.
        </p>
      </div>
    </div>
  );
}

export default Collaboration;
