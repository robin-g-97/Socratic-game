import { controlDashboardScenario } from "@/data/scenarios";
import type { Persona } from "@/types/scenario";

type ScenarioSelectionProps = {
  personas: Persona[];
  onStartCharlie: () => void;
};

export function ScenarioSelection({
  personas,
  onStartCharlie,
}: ScenarioSelectionProps) {
  return (
    <section className="screen content-screen">
      <div className="section-heading">
        <p className="eyebrow">Training personas</p>
        <h1>Choose a stakeholder challenge</h1>
        <p>
          Choose who you want to interview in this training session. Each persona represents a different stakeholder in the organization, with unique challenges and perspectives on data use. Select a persona to start a scenario where you'll conduct a Socratic interview to uncover their needs and challenges related to data.
        </p>
      </div>
      <div className="scenario-card-grid">
        {personas.map((persona) => {
          const isAvailable = persona.id === controlDashboardScenario.personaId;

          return (
            <article
              className={`scenario-card ${isAvailable ? "" : "disabled-card"}`}
              key={persona.id}
            >
              <div>
                <p className="card-kicker">
                  {isAvailable ? "Available" : "Coming soon"}
                </p>
                <h2>
                  {persona.name}: {persona.role}
                </h2>
                <p className="data-maturity">
                  Data maturity: {persona.dataMaturity}
                </p>
                <p>{persona.socraticChallenge}</p>
              </div>
              <button
                className={isAvailable ? "primary-button" : "secondary-button"}
                disabled={!isAvailable}
                onClick={isAvailable ? onStartCharlie : undefined}
                type="button"
              >
                {isAvailable ? "Start Charlie scenario" : "Coming soon"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
