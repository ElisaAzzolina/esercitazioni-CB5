import { Outlet, Link } from "react-router-dom";
import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.MainLayout}>
        <ul className={styles.menuList}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/users">USERS</Link>
          </li>
          <li>
            <Link to="/posts">POSTS</Link>
          </li>
        </ul>
        {children}
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
