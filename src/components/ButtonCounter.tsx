import React, { useState } from "react";

const ButtonCounter = ({
  initialCount,
  onClick,
}: {
  initialCount: number;
  onClick: () => void;
}) => {
  const [count, setCount] = useState(initialCount);
  function increaseCounter() {
    setCount(count + 1);
    onClick();
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button
        className={`btn btn-success ${count > 3 ? "text-lg" : "text-default"}`}
        onClick={increaseCounter}
        style={{ color: count > 3 ? "orange" : "pink" }}
      >
        Increment
      </button>
    </div>
  );
};
export default ButtonCounter;
