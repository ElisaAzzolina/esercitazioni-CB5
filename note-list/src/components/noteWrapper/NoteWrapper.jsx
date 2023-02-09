import styles from "./index.module.scss";

import { useContext } from "react";
import { ApplicationContext } from "../../store";
import NoteList from "../noteList/NoteList";
import { ACTIONS } from "../../store/ACTIONS";

function NoteWrapper() {
  const { dispatch } = useContext(ApplicationContext);

  const onHandleSearch = (e) => {
    dispatch({ type: ACTIONS.SEARCH_NOTE, payload: e.target.value });
  };

  return (
    <div className={styles.noteWrapper}>
      <h2>Le tue Note</h2>
      <input
        onInput={onHandleSearch}
        type="text"
        id="search"
        name="search"
        placeholder="Cerca"
      />
      <NoteList />
    </div>
  );
}

export default NoteWrapper;
