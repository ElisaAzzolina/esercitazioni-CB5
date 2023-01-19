import { useEffect } from "react";
import { useState } from "react";
import "./index.css";

function Filter({ onChange }) {
  /*  const [inputFilter, setInputFilter] = useState(""); */

  const onHandleSearch = (e) => {
    e.preventDefault();
    /* setInputFilter(e.target.value); */
    onChange(e.target.value);
  };

  /*  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  }; */

  /*   useEffect(() => {
    console.log(inputFilter);
  }, [inputFilter]); */

  return (
    <div>
      <form className="filter" onSubmit={(e) => e.preventDefault()}>
        <input
          className="inputText"
          type="text"
          /* value={inputFilter} */
          onChange={onHandleSearch}
          placeholder="Search Users..."
        />
      </form>
    </div>
  );
}

export default Filter;
