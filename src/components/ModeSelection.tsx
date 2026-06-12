import type { Translation } from "@/lib/i18n";

type ModeSelectionProps = {
  copy: Translation["mode"];
  onStartTraining: () => void;
};

export function ModeSelection({ copy, onStartTraining }: ModeSelectionProps) {
  return (
    <section className="screen content-screen">
      <div className="section-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
      </div>
      <div className="mode-grid">
        <article className="mode-card">
          <div>
            <p className="card-kicker">{copy.enabled}</p>
            <h2>{copy.trainingTitle}</h2>
            <p>{copy.trainingDescription}</p>
          </div>
          <button
            className="primary-button"
            onClick={onStartTraining}
            type="button"
          >
            {copy.trainingButton}
          </button>
        </article>
        <article className="mode-card disabled-card">
          <div>
            <p className="card-kicker">{copy.futureFeature}</p>
            <h2>{copy.challengeTitle}</h2>
            <p>{copy.challengeDescription}</p>
          </div>
          <button className="secondary-button" disabled type="button">
            {copy.comingSoon}
          </button>
        </article>
      </div>
    </section>
  );
}
