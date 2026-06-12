import type { Translation } from "@/lib/i18n";
import type { Persona, Scenario } from "@/types/scenario";

type ScenarioSelectionProps = {
  copy: Translation["scenarioSelection"];
  personas: Persona[];
  scenarios: Scenario[];
  onSelectScenario: (scenarioId: string) => void;
};

export function ScenarioSelection({
  copy,
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
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
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
                  {isAvailable ? copy.available : copy.comingSoon}
                </p>
                <h2>
                  {persona.name}: {persona.role}
                </h2>
                <p className="data-maturity">
                  {copy.dataMaturity}: {persona.dataMaturity}
                </p>
                <p>{scenario.subtitle}</p>
              </div>
              <button
                className={isAvailable ? "primary-button" : "secondary-button"}
                disabled={!isAvailable}
                onClick={() => onSelectScenario(scenario.id)}
                type="button"
              >
                {isAvailable ? copy.startScenario : copy.comingSoon}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
