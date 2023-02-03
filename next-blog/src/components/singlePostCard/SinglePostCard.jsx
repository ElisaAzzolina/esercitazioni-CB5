import styles from "./index.module.scss";
import Link from "next/link";

function SinglePostCard({ data }) {
  return (
    <Link className={styles.link} href={`/posts/${data?.id}`}>
      <div className={styles.card}>
        <img
          src={`https://picsum.photos/id/${data.id}/800/800`}
          alt="single post img"
        ></img>
        <h3>{data?.title}</h3>
      </div>
    </Link>
  );
}

export default SinglePostCard;
