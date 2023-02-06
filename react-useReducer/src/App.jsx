import { useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <button
        className="btnPlus"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <span className="state">{state.count}</span>
      <button
        className="btnMinus"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </div>
  );
}

export default App;
