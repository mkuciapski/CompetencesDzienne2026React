import { competences } from "../assets/Competences";

export default function Competences() {
  // const [competence] = useState(competences[1]);
  const listCompetences = competences.map((competence) => (
    <div className="card bg-base-100 w-48 shadow-sm card-spacing">
      <h2 className="text-center text-xl uppercase">{competence.Name}</h2>
      <img src={`assets/${competence.Picture}`} />
      <div className="card-body">
        <p>Poziom: {competence.Level}</p>
        {competence.Description && <p> Opis: {competence.Description}</p>}
      </div>
    </div>
  ));
  return (
    <div className="flex flex-wrap justify-center gap-2">{listCompetences}</div>
  );
}
