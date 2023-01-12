import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((number) => number + 1);
  const decrement = () => setCount((number) => number - 1);

  return { count, increment, decrement };
}
