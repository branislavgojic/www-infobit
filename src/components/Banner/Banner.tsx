import styles from "./Banner.module.scss";
import shape from "../../assets/images/content/shape.webp";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.image} ${styles.cell}`}>
        <img src={shape} alt="" />
      </div>
      <div className={`${styles.text} ${styles.cell}`}>
        <div>
          <h1>Building Your Digital Future</h1>
        </div>
        <div>
          <p>
            Transforming your ideas into powerful <br />
            software solutions.
          </p>
        </div>
        <div
          className={`${styles.consult}`}
          onClick={() =>
            document
              .getElementById("contact-form")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <p>Consult Now</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
