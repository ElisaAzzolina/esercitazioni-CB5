import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/singlePost.module.scss";
import { AiFillLike } from "react-icons/ai";

function SinglePost() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [thisPost, setThisPost] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setThisPost(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      {/*       <div className={styles.postInner}></div> */}
      <img
        className={styles.mainImg}
        src={`https://picsum.photos/500/400?${thisPost.id}`}
        alt="post"
      ></img>
      <div className={styles.post}>
        <h3>{thisPost.title}</h3>
        <p>{thisPost.body}</p>
        <div className={styles.btns}>
          <button onClick={() => navigate(`/posts`)}>Return To Posts</button>
          <button onClick={() => navigate(`/`)}>Return Home</button>
        </div>
      </div>
      <div className={styles.reactions}>
        <p className={styles.reactionsText}>
          <span className={styles.reactionsTitle}>
            <AiFillLike />
            Like:{" "}
          </span>
          {thisPost.reactions}
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
