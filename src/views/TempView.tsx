import ButtonCounter from "../components/ButtonCounter";
import { useState } from "react";

export default function Temp() {
  const [totalCount, setTotalCount] = useState(4);

  function handleClick() {
    setTotalCount(totalCount + 1);
  }

  return (
    <div>
      home Total count: {totalCount}
      <ButtonCounter initialCount={1} onClick={handleClick} />
      <ButtonCounter initialCount={1} onClick={handleClick} />
      <ButtonCounter initialCount={1} onClick={handleClick} />
      <ButtonCounter initialCount={1} onClick={handleClick} />
    </div>
  );
}
