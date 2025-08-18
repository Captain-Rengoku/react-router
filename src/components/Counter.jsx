import React, { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Porps: {props.name}</h1>
      <h2>React Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
