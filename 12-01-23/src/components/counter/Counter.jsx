import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <section className="counter_wrapper">
      <h2 className="counter_title">Counter</h2>
      <div className="counter_main">
        <button className="counter_btn" onClick={decrement}>
          -1
        </button>
        <span className="counter_number">{count}</span>
        <button className="counter_btn" onClick={increment}>
          +1
        </button>
      </div>
    </section>
  );
}
