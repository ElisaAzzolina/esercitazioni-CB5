import { endpoints } from "../../constants/endpoints";
import { useFetch } from "../../hooks/useFetch";
import "./users.css";

export function Users() {
  const { data, error, loading, refetch } = useFetch(endpoints.users);

  if (loading)
    return (
      <div className="esers_wrapper">
        <p className="users_list_item">Loading</p>
      </div>
    );
  if (error) return `Errore`;

  return (
    <section className="users_wrapper">
      <h2 className="users_title">Users 👤</h2>
      <ul className="users_list">
        <li className="li_img">
          <img className="users_img" src={data?.avatar} alt="avatar" />
        </li>
        <li>
          <span className="users_list_item">First name: </span>
          {data?.first_name}
        </li>
        <li>
          <span className="users_list_item">Last name: </span>
          {data?.last_name}
        </li>
        <li>
          <span className="users_list_item">Username: </span>
          {data?.username}
        </li>
        <li>
          <span className="users_list_item">Email: </span>
          {data?.email}
        </li>

        <li>
          <span className="users_list_item">Date of birth: </span>
          {data?.date_of_birth}
        </li>
        <li>
          <span className="users_list_item">Phone number: </span>
          {data?.phone_number}
        </li>
        <li>
          <span className="users_list_item">Gender: </span>
          {data?.gender}
        </li>
        <button className="users_btn" onClick={refetch}>
          Refetch!
        </button>
      </ul>
    </section>
  );
}
