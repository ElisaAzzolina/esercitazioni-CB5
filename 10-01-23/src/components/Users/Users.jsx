import "./users.css";
import { useEffect, useState } from "react";

const API = {
  url: `https://random-data-api.com/api/v2/users`,
};

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = () => {
    setLoading(true);
    setError(null);

    fetch(API.url)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log(`ERRORE: ${error}`);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, setLoading, error, fetchUser };
}

export function NewUser() {
  const { user, loading, error, fetchUser } = RandomUser();

  if (loading) {
    return "Caricamento Utenti";
  }
  if (error || !user) {
    return "Errore: prova a ricaricare la pagina";
  }

  const { first_name, last_name, username, email, avatar, date_of_birth } =
    user;

  return (
    <div className="user_wrapper">
      <h1 className="user_title">I nostri Utenti:</h1>
      <img src={avatar} alt="user avatar" className="user_img" />
      <h2>Username: {username}</h2>
      <h3>Nome: {first_name}</h3>
      <h3>Cognome: {last_name}</h3>
      <h4>User Email: {email}</h4>

      <p>Birthday: {date_of_birth}</p>
      <button className="user_btn" onClick={() => fetchUser()}>
        Altro Utente
      </button>
    </div>
  );
}
