import "./index.css";

const SingleFriend = ({ data }) => {
  const { image, firstName, lastName, address, age, birthDate, email } = data;

  return (
    <div className="SingleFriend">
      <img src={image} alt={lastName} />
      <div className="SingleFriend_text">
        <h3>{`${firstName} ${lastName}`}</h3>
        <h4>{address.city}</h4>
        <div className="singleFriend_info">
          <p className="singleFriend_info">{`Age: ${age}`}</p>
          <p className="singleFriend_info">{`Birth Date: ${birthDate}`}</p>
          <p className="singleFriend_info">{`${email}`}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFriend;
