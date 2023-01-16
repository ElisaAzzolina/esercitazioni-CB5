import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import SingleMessage from "../singleMessage/SingleMessage";
import "./index.css";

function MessagesList() {
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setMessagesList(posts));
  }, []);

  return (
    <div className="MessagesList">
      {messagesList.map((singleMsg) => (
        <SingleMessage data={singleMsg} key={singleMsg.id} />
      ))}
    </div>
  );
}

export default MessagesList;
