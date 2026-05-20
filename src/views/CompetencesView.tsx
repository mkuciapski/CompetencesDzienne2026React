import { competences } from "../assets/Competences";
import { useState } from "react";

export default function Competences() {
  const [competence] = useState(competences[1]);
  return (
    <div>
      <div className="card bg-base-100 w-48 shadow-sm card-spacing">
        <h2 className="text-center text-xl uppercase">{competence.Name}</h2>
        <img src={`assets/${competence.Picture}`} />
        <div className="card-body">
          <p>Poziom: {competence.Level}</p>
          <p>Opis: {competence.Description}</p>
        </div>
      </div>
    </div>
  );
}
