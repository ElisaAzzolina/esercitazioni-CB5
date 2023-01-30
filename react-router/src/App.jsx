import { useNavigate } from "react-router-dom";

import styles from "./App.module.scss";

function App() {
  const navigate = useNavigate();
  return (
    <div className={styles.App}>
      <h1>Tutti gli utenti</h1>
      <button onClick={() => navigate(`/users`)}>Vai!</button>
    </div>
  );
}

export default App;
