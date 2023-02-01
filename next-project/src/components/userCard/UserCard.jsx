import styles from "./index.module.scss";
import { MdEco, MdFavorite } from "react-icons/md";
import Link from "next/link";

function SingleUserCard({ data }) {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <img src={data?.image} alt={data?.firstName}></img>
        <h3
          className={styles.name}
        >{`${data?.firstName} ${data?.lastName}`}</h3>
        <p>
          <span className={styles.username}>Username: </span>
          {data?.username}
        </p>
        <button className={styles.btn}>
          <Link href={`/users/${data?.id}`} className={styles.link}>
            More Info
          </Link>
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.infoInner}>
          <div className={styles.innerIcon}>
            <MdEco />
          </div>
          <div>
            <p className={styles.innerTitle}>Age</p>
            <p>{data?.age}</p>
          </div>
        </div>
        <div className={styles.infoInner}>
          <div className={styles.innerIcon}>
            <MdFavorite />
          </div>
          <div>
            <p className={styles.innerTitle}>Gender</p>
            <p>{data?.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserCard;
