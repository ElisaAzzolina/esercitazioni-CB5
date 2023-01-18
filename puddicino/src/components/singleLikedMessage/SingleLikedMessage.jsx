import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

function SingleLikedMessage({ data }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="SingleLikedMessage">
      <h3 className="likedTitle">{data.title}</h3>
      <div className="sigleLikedMessage_inner">
        <div className="inner_text">
          <p className="likedName">@{user.firstName}</p>
          <ul className="likedReactions">
            <li>💕 {data.reactions}</li>
          </ul>
        </div>
        <img className="likedImage" src={user.image} alt={user.firstName} />
      </div>
    </div>
  );
}

export default SingleLikedMessage;
