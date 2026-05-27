import ButtonCounter from "../components/ButtonCounter";
import { useState } from "react";
import { createRef, useEffect } from "react";

export default function Temp() {
  const [totalCount, setTotalCount] = useState(4);

  function handleClick() {
    setTotalCount(totalCount + 1);
  }

  const iWorldCupWinner = createRef<HTMLInputElement>();

  useEffect(() => {
    iWorldCupWinner.current.style.backgroundColor = "red";
    console.log(iWorldCupWinner.current?.value);
  });
  return (
    <div>
      <input
        className="input join-item"
        placeholder="Mistrzostwa świata wygra"
        ref={iWorldCupWinner}
        value="Hiszpania"
      ></input>
      home Total count: {totalCount}
      <ButtonCounter initialCount={1} onClick={handleClick} />
      <ButtonCounter initialCount={1} onClick={handleClick} />
      <ButtonCounter initialCount={1} onClick={handleClick} />
      <ButtonCounter initialCount={1} onClick={handleClick} />
    </div>
  );
}
