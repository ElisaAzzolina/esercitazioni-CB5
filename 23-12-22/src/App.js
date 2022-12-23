import "./App.css";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { Text } from "./atoms/Text/Text";

function App() {
  return (
    <div class="container">
      <Text variant="title">My (credible) To Do List</Text>
      <ToDoList />
    </div>
  );
}

export default App;
