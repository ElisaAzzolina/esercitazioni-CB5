import { useState, useEffect } from "react";
import { POST } from "../../utils/http";
import "./index.css";

function NewMessage({ func }) {
  const [messageText, setMessageText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [urlText, setUrlText] = useState("");
  const [messagePost, setMessagePost] = useState({});

  const onHandleMessageText = (e) => setMessageText(e.target.value);
  const onHandleAuthorText = (e) => setAuthorText(e.target.value);
  const onHandleTitleText = (e) => setTitleText(e.target.value);
  const onHandleUrlText = (e) => setUrlText(e.target.value);

  const OnSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      image: urlText,
      firstName: authorText,
      title: titleText,
      body: messageText,
    });
  };

  useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost);
  }, [messagePost]);

  return (
    <div className="NewMessage">
      <h2 className="MsgTitle">A costa stai pensando?</h2>
      <form className="messageForm" onSubmit={OnSubmit}>
        <div className="inputSection">
          <input
            className="inputImg"
            value={urlText}
            onChange={onHandleUrlText}
            type="text"
            placeholder="Img url"
            required
          />
          <div className="inputSubsection">
            <input
              className="inputAuthor"
              value={authorText}
              onChange={onHandleAuthorText}
              type="text"
              placeholder="Author"
              required
            />
            <input
              className="inputTitle"
              value={titleText}
              onChange={onHandleTitleText}
              type="text"
              placeholder="Title"
              required
            />
          </div>
        </div>
        <input
          className="inputMessage"
          value={messageText}
          onChange={onHandleMessageText}
          type="text"
          placeholder="Message here..."
          required
        />
        <input
          className="inputSubmit"
          type="submit"
          value="Send"
          onClick={func}
        />
      </form>
    </div>
  );
}

export default NewMessage;
