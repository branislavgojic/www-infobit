import styles from './Header.module.scss';
import logo from '../../assets/images/logo/logo.png';

function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
}

export default Header;
