import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // State

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={increase}> // Re-renders only this button
      Clicked {count} times
    </button>
  );
}

export default Counter;