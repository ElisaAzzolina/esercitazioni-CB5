import { Outlet, useNavigate } from "react-router-dom";

import styles from "./App.module.scss";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.App}>
        <h1>LITTLE CUTE REACT-ROUTER SITE</h1>
        <h2>🤖 With Robots 🤖</h2>
        <div className={styles.btns}>
          <button onClick={() => navigate(`/users`)}>Users!</button>
          <button onClick={() => navigate(`/posts`)}>Posts!</button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
