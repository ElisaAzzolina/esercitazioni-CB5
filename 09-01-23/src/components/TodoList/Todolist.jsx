import { useState } from "react";
import { Inputs } from "../../atoms/inputs/Inputs";
import { Todoitem } from "../TodoItem/Todoitem";
import "./todolist.css";

export function Todolist() {
  const [items, setItem] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formEl = e.target;
    const formData = new FormData(formEl);
    const label = formData.get("taskName");

    setItem((otherItems) => {
      const newItem = { label, isDone: false };
      return [...otherItems, newItem];
    });
  };

  const changeStatus = (index, currentStatus) => {
    setItem((otherItems) => {
      const newItems = otherItems.concat([]);
      newItems[index].isDone = !currentStatus;
      return newItems;
    });
  };

  return (
    <div className="todolist">
      <h1 className="title">To-do List!</h1>
      <form onSubmit={submitHandler}>
        <Inputs label={"Nuova task:"} name="taskName" autocomplete="off" />
      </form>

      <ul className="list">
        {items.map((item, index) => (
          <Todoitem
            key={index}
            index={index}
            isDone={item.isDone}
            changeStatus={changeStatus}
          >
            {item.label}
          </Todoitem>
        ))}
      </ul>
    </div>
  );
}
