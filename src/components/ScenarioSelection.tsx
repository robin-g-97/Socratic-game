import type { Persona, Scenario } from "@/types/scenario";

type ScenarioSelectionProps = {
  personas: Persona[];
  scenarios: Scenario[];
  onSelectScenario: (scenarioId: string) => void;
};

export function ScenarioSelection({
  personas,
  scenarios,
  onSelectScenario,
}: ScenarioSelectionProps) {
  function getPersona(personaId: string): Persona {
    const persona = personas.find((item) => item.id === personaId);

    if (!persona) {
      throw new Error(`Unknown persona: ${personaId}`);
    }

    return persona;
  }

  return (
    <section className="screen content-screen">
      <div className="section-heading">
        <p className="eyebrow">Training personas</p>
        <h1>Choose a stakeholder challenge</h1>
        <p>
          Pick the stakeholder lens you want to practice. Each available
          challenge has a scripted training dialogue.
        </p>
      </div>
      <div className="scenario-card-grid">
        {scenarios.map((scenario) => {
          const persona = getPersona(scenario.personaId);
          const isAvailable = scenario.status === "available";

          return (
            <article
              className={`scenario-card ${isAvailable ? "" : "disabled-card"}`}
              key={scenario.id}
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
                <p>{scenario.subtitle}</p>
              </div>
              <button
                className={isAvailable ? "primary-button" : "secondary-button"}
                disabled={!isAvailable}
                onClick={() => onSelectScenario(scenario.id)}
                type="button"
              >
                {isAvailable ? "Start scenario" : "Coming soon"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
