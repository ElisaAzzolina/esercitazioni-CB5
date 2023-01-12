import { useState } from "react";
import { componentMap } from "../../constants/componentMap";
import "./selector.css";

function Selector(props) {
  const { selectorHandler } = props;

  return (
    <form className="form_wrapper">
      <select
        className="form_select"
        defaultValue={""}
        onChange={selectorHandler}
      >
        <option disabled value="">
          Select a component
        </option>
        <option className="select_option" value="counter">
          counter
        </option>
        <option className="select_option" value="addresses">
          addresses
        </option>
        <option className="select_option" value="beers">
          beers
        </option>
        <option className="select_option" value="creditCards">
          credit cards
        </option>
        <option className="select_option" value="users">
          users
        </option>
      </select>
    </form>
  );
}

export function ComponentSelector() {
  const [component, setComponent] = useState("default");

  const changeHandler = (event) => {
    setComponent(event.target.value);
  };

  const DynamicComponent = componentMap[component];

  return (
    <div className="selector">
      <Selector selectorHandler={changeHandler} />
      <DynamicComponent />
    </div>
  );
}
