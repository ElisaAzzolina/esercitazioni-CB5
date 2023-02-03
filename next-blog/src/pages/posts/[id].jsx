import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/singlePost.module.scss";

function SinglePost() {
  const router = useRouter();
  const id = router.query.id;

  const [thisPost, setThisPost] = useState({});

  useEffect(() => {
    if (router.isReady)
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setThisPost(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <div className={styles.singlePost}>
      <h3>{thisPost?.title}</h3>
      <ul className={styles.tags}>
        {thisPost?.tags?.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <img
        src={`https://picsum.photos/id/${thisPost?.id}/900/600`}
        alt="single post img"
      ></img>
      <p>{thisPost?.body}</p>
      <div className={styles.btns}>
        <Link href={`/posts`} className={styles.link}>
          <button className={styles.btn}>RETURN TO POST</button>
        </Link>
        <Link href={`/`} className={styles.link}>
          <button className={styles.btn}>HOME</button>
        </Link>
      </div>
    </div>
  );
}

export default SinglePost;
