import "./App.css";
import FriendsList from "./components/friendsList";
import MessagesList from "./components/messagesList/MessagesList";
import NewMessage from "./components/newMessage/NewMessage";

function App() {
  return (
    <div className="App">
      <section className="mainSection">
        <div className="friends">
          <FriendsList />
        </div>
        <div className="messages">
          <NewMessage />
          <MessagesList />
        </div>
        <div className="others">
          <h2>altro</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
