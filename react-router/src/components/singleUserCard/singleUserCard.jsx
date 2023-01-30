import { useNavigate } from "react-router-dom";
import styles from "./singleUserCard.module.scss";
import { MdEco, MdFavorite } from "react-icons/md";

function SingleUserCard({ data }) {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <p>{data?.address.city}</p>
        <img src={data?.image} alt={data?.firstName}></img>
        <h3
          className={styles.name}
        >{`${data?.firstName} ${data?.lastName}`}</h3>
        <p>
          <span className={styles.username}>Username: </span>
          {data?.username}
        </p>
        <button onClick={() => navigate(`/users/${data.id}`)}>More info</button>
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
