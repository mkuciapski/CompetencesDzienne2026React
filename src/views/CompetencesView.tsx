import { competences } from "../assets/Competences";
import CompetenceCard from "../components/CompetenceCard";
import React, { useState, useEffect } from "react";

export default function Competences() {
  const [_competences, setCompetences] = useState(competences);

  useEffect(() => {
    setTimeout(() => {
      setCompetences((internal) => [
        ...internal,
        {
          Id: 12,
          Name: "SQL",
          Level: 2,
          Picture: "bootstrap.svg",
          Description: "Bazy danych",
        },
      ]);
    }, 5000);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {_competences.map(
        (competence, Id) =>
          competence.Level > 0 && (
            <CompetenceCard key={competence.Id} competence={competence} />
          ),
      )}
    </div>
  );
}
