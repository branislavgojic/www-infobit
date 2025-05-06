import styles from './Footer.module.scss';
import logo from '../../assets/images/logo/logo.png';
import X from '../../assets/images/content/x.svg?react';
import Linkedin from '../../assets/images/content/linkedin.svg?react';

function Footer() {
  return (
    <div className={styles.section}>
      <img src={logo} alt="" />
      <p>© 2025. All Rights Reserved.</p>
      <ul>
        <li>
          <Linkedin />
        </li>
        <li>
          <X />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
