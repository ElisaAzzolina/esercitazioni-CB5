import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SingleUserCard from "./../components/singleUserCard/singleUserCard";
import styles from "./styles/users.module.scss";

function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);

  return (
    <>
      <div className={styles.main}>
        {users.map((single) => (
          <SingleUserCard data={single} key={single?.id} />
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default Users;
