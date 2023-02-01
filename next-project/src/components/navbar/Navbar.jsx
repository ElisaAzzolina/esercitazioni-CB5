import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/" className={styles.listItemA}>
            HOME
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/users" className={styles.listItemA}>
            USERS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
