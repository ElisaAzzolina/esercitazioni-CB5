import "./index.css";

function Button({ isModalEnabled, func }) {
  return isModalEnabled ? (
    <button onClick={func} className="Button">
      x
    </button>
  ) : (
    <button onClick={func} className="Button">
      +
    </button>
  );
}

export default Button;
