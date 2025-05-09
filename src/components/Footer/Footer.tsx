import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo/logo.png";
import X from "../../assets/images/content/x.svg?react";
import Linkedin from "../../assets/images/content/linkedin.svg?react";

function Footer() {
  return (
    <div className={styles.section}>
      <img src={logo} alt="" />
      <p>© 2025. All Rights Reserved.</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/company/infobit-sp"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <X />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
