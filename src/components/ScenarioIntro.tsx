import type { Translation } from "@/lib/i18n";
import type { Persona, Scenario } from "@/types/scenario";

type ScenarioIntroProps = {
  copy: Translation["intro"];
  scenario: Scenario;
  persona: Persona;
  onStart: () => void;
  onBack: () => void;
};

export function ScenarioIntro({
  copy,
  scenario,
  persona,
  onStart,
  onBack,
}: ScenarioIntroProps) {
  return (
    <section className="screen content-screen">
      <div className="scenario-layout">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{scenario.title}</h1>
          <p>{scenario.subtitle}</p>
        </div>
        <article className="stakeholder-card">
          <p className="card-kicker">{copy.stakeholder}</p>
          <h2>{persona.name}</h2>
          <p className="role-label">{persona.role}</p>
          <p>{persona.context}</p>
          <dl className="persona-facts">
            <div>
              <dt>{copy.dataMaturity}</dt>
              <dd>{persona.dataMaturity}</dd>
            </div>
            <div>
              <dt>{copy.blindSpot}</dt>
              <dd>{persona.blindSpot}</dd>
            </div>
            <div>
              <dt>{copy.socraticChallenge}</dt>
              <dd>{persona.socraticChallenge}</dd>
            </div>
          </dl>
        </article>
        <article className="quote-panel">
          <p>&quot;{scenario.opening}&quot;</p>
        </article>
        <article className="learning-goal">
          <p className="card-kicker">{copy.learningGoal}</p>
          <p>{scenario.learningGoal}</p>
          <div className="uncover-list">
            <h3>{copy.uncover}</h3>
            <ul>
              {scenario.whatPlayerMustUncover.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
        <div className="button-row">
          <button className="primary-button" onClick={onStart} type="button">
            {copy.startDialogue}
          </button>
          <button className="secondary-button" onClick={onBack} type="button">
            {copy.back}
          </button>
        </div>
      </div>
    </section>
  );
}
