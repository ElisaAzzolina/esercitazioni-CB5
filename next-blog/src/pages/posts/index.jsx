import SinglePostCard from "@/components/singlePostCard";
import styles from "@/styles/posts.module.scss";

export default function Posts({ posts }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>All my posts: </h2>
      <div className={styles.posts}>
        {posts &&
          posts.map((post) => <SinglePostCard data={post} key={post?.id} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resPosts = await fetch("https://dummyjson.com/posts");
  const dataPosts = await resPosts.json();

  return {
    props: {
      posts: dataPosts.posts,
    },
  };
}
