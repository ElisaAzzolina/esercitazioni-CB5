import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./../../styles/singleUser.module.scss";
import Link from "next/link";

function SingleUser() {
  const router = useRouter();
  const id = router.query.id;

  const [thisUser, setThisUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setThisUser(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <img src={thisUser.image} alt={thisUser.firstName} />
          <div className={styles.card1Text}>
            <h3>{`${thisUser.firstName} ${thisUser.lastName}`}</h3>
            <h4>
              <span className={styles.title}>Maiden Name: </span>
              {thisUser.maidenName}
            </h4>
            <p>
              <span className={styles.title}>BirthDate: </span>
              {thisUser.birthDate}
            </p>
            <p>
              <span className={styles.title}>Phone: </span>
              {thisUser.phone}
            </p>
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.btn}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </button>
          <button className={styles.btn}>
            <Link href="/users" className={styles.link}>
              Users
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
