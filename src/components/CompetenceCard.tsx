interface CompetenceProps {
  competence: {
    Name: string;
    Picture: string;
    Level: number;
    Description: string;
  };
}

export default function CompetenceCard({ competence }: CompetenceProps) {
  return (
    <div className="card bg-base-100 w-48 shadow-sm card-spacing">
      <h2 className="text-center text-xl uppercase">{competence.Name}</h2>
      <img src={`assets/${competence.Picture}`} />
      <div className="card-body">
        <p
          style={{
            color:
              competence.Level < 3
                ? "red"
                : competence.Level === 3
                  ? "black"
                  : "green",
          }}
        >
          Poziom: {competence.Level}
        </p>
        {competence.Description && <p> Opis: {competence.Description}</p>}
      </div>
    </div>
  );
}
