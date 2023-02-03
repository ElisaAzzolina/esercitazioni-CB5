import Link from "next/link";
import styles from "./index.module.scss";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo}>
        <Link className={styles.logo__link} href="/">
          MY BLOG
        </Link>
      </div>
      <div className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <Link href="/" className={styles.list__link}>
              HOME
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href="/posts" className={styles.list__link}>
              POSTS
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href="/" className={styles.list__link}>
              CONTACTS
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <ul className={styles.socialList}>
          <li className={styles.socialList__item}>
            <BsFacebook />
          </li>
          <li className={styles.socialList__item}>
            <BsTwitter />
          </li>
          <li className={styles.socialList__item}>
            <AiFillInstagram />
          </li>
          <li className={styles.socialList__item}>
            <BsPinterest />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
