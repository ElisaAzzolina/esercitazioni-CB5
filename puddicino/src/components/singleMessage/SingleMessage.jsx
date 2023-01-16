import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

function SingleMessage({ data }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="SingleMessage">
      <div className="sigleMessage_titleUser">
        <img className="userImage" src={user.image} alt={user.firstName} />
        <div className="titleUser_inner">
          <p className="userName">@{user.firstName}</p>
          <h3 className="postTitle">{data.title}</h3>
        </div>
      </div>
      <p className="postText">{data.body}</p>
      <ul className="postReactions">
        <li>💕 {data.reactions}</li>
      </ul>
    </div>
  );
}

export default SingleMessage;
