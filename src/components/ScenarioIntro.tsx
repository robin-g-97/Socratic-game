import type { Persona, Scenario } from "@/types/scenario";

type ScenarioIntroProps = {
  scenario: Scenario;
  persona: Persona;
  onStart: () => void;
  onBack: () => void;
};

export function ScenarioIntro({
  scenario,
  persona,
  onStart,
  onBack,
}: ScenarioIntroProps) {
  return (
    <section className="screen content-screen">
      <div className="scenario-layout">
        <div className="section-heading">
          <p className="eyebrow">Training scenario</p>
          <h1>{scenario.title}</h1>
          <p>{scenario.subtitle}</p>
        </div>
        <article className="stakeholder-card">
          <p className="card-kicker">Stakeholder</p>
          <h2>{persona.name}</h2>
          <p className="role-label">{persona.role}</p>
          <p>{persona.context}</p>
          <dl className="persona-facts">
            <div>
              <dt>Data maturity</dt>
              <dd>{persona.dataMaturity}</dd>
            </div>
            <div>
              <dt>Blind spot</dt>
              <dd>{persona.blindSpot}</dd>
            </div>
            <div>
              <dt>Socratic challenge</dt>
              <dd>{persona.socraticChallenge}</dd>
            </div>
          </dl>
        </article>
        <article className="quote-panel">
          <p>&quot;{scenario.opening}&quot;</p>
        </article>
        <article className="learning-goal">
          <p className="card-kicker">Learning goal</p>
          <p>{scenario.learningGoal}</p>
          <div className="uncover-list">
            <h3>What you must uncover</h3>
            <ul>
              {scenario.whatPlayerMustUncover.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
        <div className="button-row">
          <button className="primary-button" onClick={onStart} type="button">
            Start dialogue
          </button>
          <button className="secondary-button" onClick={onBack} type="button">
            Back to personas
          </button>
        </div>
      </div>
    </section>
  );
}
