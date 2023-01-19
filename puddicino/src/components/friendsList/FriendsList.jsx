import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import SingleFriend from "../singleFriend";
import "./index.css";
import Filter from "../filter/Filter";

const FriendsList = () => {
  const [filterState, setFilterState] = useState("");
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  useEffect(() => {
    console.log(filterState);
  }, [filterState]);

  return (
    <div className="FriendsList">
      <h2 className="friendsTitle">Tutti gli Amici</h2>
      <Filter onChange={setFilterState} />
      {friendsList
        .filter((friend) =>
          friend.firstName.toLowerCase().includes(filterState)
        )
        .map((friend) => (
          <SingleFriend data={friend} key={friend.id} />
        ))}
    </div>
  );
};

export default FriendsList;
