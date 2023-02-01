import SingleUserCard from "@/src/components/userCard/UserCard";
import styles from "./../../styles/users.module.scss";

export default function Users({ users }) {
  return (
    <div className={styles.main}>
      {users &&
        users.map((user) => <SingleUserCard data={user} key={user?.id} />)}
    </div>
  );
}

export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();

  return {
    props: {
      users: dataUsers.users,
    },
  };
}
