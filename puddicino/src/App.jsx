import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import FriendsList from "./components/friendsList";
import MessagesList from "./components/messagesList/MessagesList";
import Modal from "./components/modal/Modal";
import NewMessage from "./components/newMessage/NewMessage";
import Button from "./atoms/button/Button";
import LikedMessages from "./components/likedMessages/LikedMessages";
import Navbar from "./components/navbar";

function App() {
  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
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
            <Modal>
              <NewMessage
                isModalEnabled={isModalEnabled}
                func={onHandleModal}
              />
            </Modal>
          )}
          <Filter setFilterState={setFilterState} />
          <MessagesList searchFilter={filterState} />
        </div>
        <div className="others">
          <LikedMessages />
        </div>
      </section>
    </div>
  );
}

export default App;
