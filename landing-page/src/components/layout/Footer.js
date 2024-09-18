import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>StrugglerDev</span> &copy; 2024
      </p>
    </footer>
  );
}

export default Footer;
