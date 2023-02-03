import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/hero";
import MostPopCard from "@/components/mostPopCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <div className={styles.sectionTitle}>
          <h2>Most Popular</h2>
        </div>
        <div className={styles.mostPop}>
          {posts &&
            posts
              .filter((post) => post.reactions > 5)
              .map((p) => <MostPopCard data={p} key={p?.id} />)}
        </div>
      </main>
    </>
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
