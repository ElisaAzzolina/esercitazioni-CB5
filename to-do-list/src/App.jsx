import styles from "./App.module.scss";
import { useReducer } from "react";
import { ApplicationContext, initialState } from "./store/state";
import reducer from "./store/reducer";
import FormTodo from "./components/formTodo/FormTodo";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      <div className={styles.app}>
        <FormTodo />
        <div className={styles.container}>
          <h1>To-do List</h1>
          <TodoList />
        </div>
      </div>
    </ApplicationContext.Provider>
  );
}

export default App;
