import type { Translation } from "@/lib/i18n";

type LandingPageProps = {
  copy: Translation["landing"];
  onStart: () => void;
};

export function LandingPage({ copy, onStart }: LandingPageProps) {
  return (
    <section className="screen hero-screen">
      <div className="hero-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-subtitle">{copy.subtitle}</p>
        <div className="intro-context">
          <p>{copy.context}</p>
          <div className="intro-points">
            {copy.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
        <button className="primary-button" onClick={onStart} type="button">
          {copy.start}
        </button>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="conversation-card stakeholder-note">
          <span>{copy.stakeholder}</span>
          <strong>&quot;{copy.stakeholderQuote}&quot;</strong>
        </div>
        <div className="conversation-card analyst-note">
          <span>{copy.analyst}</span>
          <strong>&quot;{copy.analystQuote}&quot;</strong>
        </div>
        <div className="signal-panel">
          <div />
          <div />
          <div />
        </div>
      </div>
    </section>
  );
}
