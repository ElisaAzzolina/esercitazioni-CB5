import { useState } from "react";
import "./index.css";

function Filter({ setFilterState }) {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleSearch = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div>
      <form className="filter" onSubmit={onHandleSubmit}>
        <input
          className="inputText"
          type="text"
          value={inputFilter}
          onChange={onHandleSearch}
          placeholder="Type Here..."
        />
        <input type="submit" value="Search" className="inputBtn" />
      </form>
    </div>
  );
}

export default Filter;
