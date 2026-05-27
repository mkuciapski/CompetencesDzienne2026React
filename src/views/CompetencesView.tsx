import { competences } from "../assets/Competences";
import CompetenceCard from "../components/CompetenceCard";
import React, { useState, useEffect, useRef } from "react";

export default function Competences() {
  const [_competences, setCompetences] = useState(competences);
  const [searchQuery, setSearchQuery] = useState("");
  const searchText = useRef<HTMLInputElement>(null);

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
  const searchCompetence = () => {
    const query = searchText.current?.value.toLowerCase();
    setSearchQuery(query);
  };

  const filteredCompetences = _competences.filter((competence) =>
    competence.Name.toLowerCase().includes(searchQuery),
  );

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button className="btn join-item bg-green-600 text-white border-none cursor-default">
        Podaj nazwę kompetencji
      </button>
      <input
        type="text"
        className="input input-bordered join-item w-full max-w-xs"
        placeholder="..."
        ref={searchText}
        onKeyUp={searchCompetence}
      />
      <div className="flex flex-wrap justify-center gap-2">
        {filteredCompetences.map(
          (competence, Id) =>
            competence.Level > 0 && (
              <CompetenceCard key={competence.Id} competence={competence} />
            ),
        )}
      </div>
    </div>
  );
}
