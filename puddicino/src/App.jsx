import "./App.css";
import MessagesList from "./components/messagesList/MessagesList";
import NewMessage from "./components/newMessage/NewMessage";

function App() {
  return (
    <div className="App">
      <h1 className="title">Puddicino</h1>
      <NewMessage />
      <MessagesList />
    </div>
  );
}

export default App;
