import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  function increaseCounter() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button class="btn btn-success" onClick={increaseCounter}>
        Increment
      </button>
    </div>
  );
};
export default ButtonCounter;
