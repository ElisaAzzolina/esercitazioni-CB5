import Image from "next/image";
import styles from "./hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.img}
        src="https://picsum.photos/1920/1080"
        alt="random pic"
        width={1920}
        height={0}
        priority
      />
      <h1>Welcome!</h1>
    </div>
  );
}

export default Hero;
