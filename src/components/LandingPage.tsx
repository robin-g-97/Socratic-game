type LandingPageProps = {
  onStart: () => void;
};

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <section className="screen hero-screen">
      <div className="hero-copy">
        <p className="eyebrow">BI training game</p>
        <h1>The Socratic Analyst</h1>
        <p className="hero-subtitle">
          A short BI dialogue game about asking better questions before building
          dashboards.
        </p>
        <div className="intro-context">
          <p>
            Good BI starts before the first visual is designed. The hardest part
            is often not building the dashboard, but turning a vague stakeholder
            request into a clear decision, action, and measure of success.
          </p>
          <div className="intro-points">
            <span>Clarify the real decision</span>
            <span>Expose hidden assumptions</span>
            <span>Build requirements that guide action</span>
          </div>
        </div>
        <button className="primary-button" onClick={onStart} type="button">
          Start training
        </button>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="conversation-card stakeholder-note">
          <span>Stakeholder</span>
          <strong>&quot;I need more control.&quot;</strong>
        </div>
        <div className="conversation-card analyst-note">
          <span>Analyst</span>
          <strong>&quot;What decision should change?&quot;</strong>
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
