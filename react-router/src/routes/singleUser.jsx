import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/singleUser.module.scss";

function SingleUser() {
  const { user } = useParams();
  const navigate = useNavigate();

  const [thisUser, setThisUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
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
        <div className={styles.card2}>
          <p>
            <span className={styles.title2}>Address: </span>
            <br></br>
            {thisUser?.address?.address}
          </p>
          <p>
            <span className={styles.title2}>City: </span>
            <br></br>
            {thisUser?.address?.postalCode}
          </p>
          <p>
            <span className={styles.title2}>Postal Code: </span>
            <br></br>
            {thisUser?.address?.postalCode}
          </p>
          <p>
            <span className={styles.title2}>State: </span>
            <br></br>
            {thisUser?.address?.state}
          </p>
        </div>
      </div>
      <button onClick={() => navigate(`/`)}>Torna alla home</button>
    </div>
  );
}

export default SingleUser;
