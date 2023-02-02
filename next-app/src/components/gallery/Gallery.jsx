import Image from "next/image";
import styles from "./gallery.module.scss";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__column}>
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=1"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/800?random=2"
          alt="random pic"
          width={300}
          height={500}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=3"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={styles.gallery__column}>
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=4"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=5"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/800?random=6"
          alt="random pic"
          width={300}
          height={500}
          priority
        />
      </div>
      <div className={styles.gallery__column}>
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/800?random=7"
          alt="random pic"
          width={300}
          height={500}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=8"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=9"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className={styles.gallery__column}>
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=10"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/600?random=11"
          alt="random pic"
          width={300}
          height={300}
          priority
        />
        <Image
          className={styles.gallery__image}
          src="https://picsum.photos/600/800?random=13"
          alt="random pic"
          width={300}
          height={500}
          priority
        />
      </div>
    </div>
  );
}

export default Gallery;
