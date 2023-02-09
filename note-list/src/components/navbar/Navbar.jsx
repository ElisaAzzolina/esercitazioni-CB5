import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationContext } from "../../store";
import { ACTIONS } from "../../store/ACTIONS";

function Navbar() {
  const { state, dispatch } = useContext(ApplicationContext);
  const Logout = () => {
    localStorage.removeItem("userName");
    dispatch({ type: ACTIONS.DELETE_USERNAME });
  };
  return (
    <div className={styles.navbar}>
      <h2>Ciao, {state.user.userName}!</h2>
      <button onClick={() => Logout()}>Non sei {state.user.userName}?</button>
    </div>
  );
}

export default Navbar;
