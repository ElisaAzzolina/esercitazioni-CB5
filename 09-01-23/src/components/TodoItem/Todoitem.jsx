import "./todoitem.css";

export function Todoitem(props) {
  const { children, isDone, changeStatus, index } = props;

  const clickHandler = () => {
    changeStatus(index, isDone);
  };

  return (
    <li onClick={clickHandler}>
      {isDone ? "🗹" : "☐"}
      <span onClick={clickHandler} className={isDone ? "checked" : "box"}>
        {children}
      </span>
      <button
        onClick={clickHandler}
        className={isDone ? "btn-checked" : "btn-box"}
      >
        {isDone ? "Da fare" : "Fatto"}
      </button>
    </li>
  );
}
