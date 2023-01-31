import styles from "./singlePostCard.module.scss";
import { useNavigate } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

export default function SinglePostCard({ data }) {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <img
        className={styles.mainImg}
        src={`https://picsum.photos/250/300?${data.id}`}
        alt="post"
      ></img>
      <div className={styles.text}>
        <h2>{data.title}</h2>

        <button
          className={styles.postCardBtn}
          onClick={() => navigate(`/posts/${data.id}`)}
        >
          Read The Article
        </button>

        <div className={styles.reactions}>
          <p className={styles.reactionsText}>
            <span className={styles.reactionsTitle}>
              {" "}
              <AiFillLike />
              Like:{" "}
            </span>
            {data.reactions}
          </p>
        </div>
      </div>
    </div>
  );
}
