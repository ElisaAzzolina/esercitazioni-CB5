import Link from "next/link";
import styles from "./index.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__img}>
        <img src="https://picsum.photos/id/42/800/800" alt="hero"></img>
      </div>
      <div className={styles.hero__main}>
        <div className={styles.main__title}>
          <hr></hr>
          <h1 className={styles.title}>WELCOME TO MY PERSONAL BLOG</h1>
          <hr></hr>
        </div>
        <div className={styles.main__imgs}>
          <div className={styles.img1}>
            <Link href="/posts">
              <img
                src="https://picsum.photos/id/15/300/500"
                alt="post page"
              ></img>
            </Link>
            <p>MY POSTS</p>
          </div>
          <div className={styles.img2}>
            <Link href="/">
              <img
                src="https://picsum.photos/id/0/300/300"
                alt="contact me"
              ></img>
            </Link>
            <p className={styles.img2__text}>CONTACTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
