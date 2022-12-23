import { useState } from "react";
import "./todolist.css";

function SingleItem(text) {
  const [isDone, changeStatus] = useState(false);

  return (
    <li
      onClick={() => changeStatus(!isDone)}
      className={isDone ? "checked" : "box"}
    >
      <button
        onClick={() => changeStatus(!isDone)}
        className={isDone ? "checked" : "box"}
      >
        {isDone ? "🗹" : "☐"}
      </button>
      {text}
    </li>
  );
}

export function ToDoList() {
  const toDoListItem = [
    { label: "Studiare (un po')" },
    { label: "Mangiare dolci" },
    { label: "Passare ore su Pinterest" },
    { label: "Coccolare i gatti" },
    { label: "Coccolare il cane" },
    { label: "Dormire" },
  ];

  return (
    <div className="todolist">
      <ul>
        {toDoListItem.map((item) => {
          return SingleItem(item.label);
        })}
      </ul>
    </div>
  );
}
