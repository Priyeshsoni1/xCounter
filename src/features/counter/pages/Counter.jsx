import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Counter APP</h2>

      <div style={{ marginBottom: "2rem" }}>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
