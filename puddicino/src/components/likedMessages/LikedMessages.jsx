import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";
import SingleLikedMessage from "../singleLikedMessage/SingleLikedMessage";

function LikedMessages() {
  const [likedMessages, setLikedMessages] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) =>
      setLikedMessages(posts.filter((post) => post.reactions >= 5))
    );
  }, []);

  return (
    <div className="LikedMessagesList">
      <h2 className="likedMessageTitle">Di tendenza</h2>
      {likedMessages.map((singleMsg) => (
        <SingleLikedMessage data={singleMsg} key={singleMsg.id} />
      ))}
    </div>
  );
}

export default LikedMessages;
