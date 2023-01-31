import { useState, useEffect } from "react";
import SinglePostCard from "../components/singlePostCard/SinglePostCard";
import styles from "./styles/posts.module.scss";

export default function Posts() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data.posts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      {post.map((single) => (
        <SinglePostCard data={single} key={single?.id} />
      ))}
    </div>
  );
}
