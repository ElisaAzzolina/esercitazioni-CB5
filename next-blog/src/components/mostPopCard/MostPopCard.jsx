import Link from "next/link";
import styles from "./index.module.scss";

function MostPopCard({ data }) {
  return (
    <div className={styles.mostPop}>
      <img
        src={`https://picsum.photos/id/${data?.id}/800/800`}
        alt="post img"
      ></img>
      <div className={styles.title}>
        <hr></hr>
        <h2>{data?.title}</h2>
        <hr></hr>
        <Link href={`/posts/${data?.id}`} className={styles.link}>
          <button className={styles.btn}>READ MORE</button>
        </Link>
      </div>
    </div>
  );
}

export default MostPopCard;
