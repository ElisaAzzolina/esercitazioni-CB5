import { useState, useEffect } from "react";
import { POST } from "../../utils/http";
import "./index.css";

function NewMessage() {
  const [message, setMessage] = useState("");

  const onHandleInput = (e) => setMessage(e.target.value);

  const OnSubmit = (e) => {
    e.preventDefault();
    POST(`posts/add`, message).then(console.log(message));
  };

  return (
    <div className="NewMessage">
      <form className="messageForm" onSubmit={OnSubmit}>
        <input
          className="inputText"
          type="text"
          value={message}
          onChange={onHandleInput}
          placeholder="A cosa stai pensando?"
        />
        <input className="inputSubmit" type="submit" value="invia" />
      </form>
    </div>
  );
}

export default NewMessage;
