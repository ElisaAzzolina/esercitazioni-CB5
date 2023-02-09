import { useState, useContext } from "react";
import { ApplicationContext } from "../../store";
import { ACTIONS } from "../../store/ACTIONS";

import styles from "./index.module.scss";

function AddNote() {
  const { dispatch } = useContext(ApplicationContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_NEW_NOTE,
      payload: {
        id: Math.floor(Math.random() * 1000),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
  };

  return (
    <div className={styles.addNote}>
      <h2>Aggiungi una Nota</h2>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          placeholder="Titolo"
          required
        />
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          placeholder="Testo"
          required
        />
        <input className={styles.btn} type="submit" value="Aggiungi Nota" />
      </form>
    </div>
  );
}

export default AddNote;
