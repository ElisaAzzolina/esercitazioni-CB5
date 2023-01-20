import { useState, useEffect } from "react";
import "./App.css";
import FriendsList from "./components/friendsList";
import MessagesList from "./components/messagesList/MessagesList";
import Modal from "./components/modal/Modal";
import NewMessage from "./components/newMessage/NewMessage";
import Button from "./atoms/button/Button";
import LikedMessages from "./components/likedMessages/LikedMessages";
import Navbar from "./components/navbar";
import Login from "./components/login";

function App() {
  const [user, setUser] = useState();
  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(JSON.parse(localStorage.getItem("username")).username);
    }
  }, []);

  return user ? (
    <div className="App">
      <Navbar>
        <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
      </Navbar>
      <section className="mainSection">
        <div className="friends">
          <FriendsList />
        </div>
        <div className="messages">
          {isModalEnabled && (
            <Modal setModalEnabled={setModalEnabled}>
              <NewMessage
                isModalEnabled={isModalEnabled}
                func={onHandleModal}
              />
            </Modal>
          )}
          <MessagesList />
        </div>
        <div className="others">
          <LikedMessages />
        </div>
      </section>
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );
}

export default App;
