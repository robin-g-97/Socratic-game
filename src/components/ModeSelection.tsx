type ModeSelectionProps = {
  onStartTraining: () => void;
};

export function ModeSelection({ onStartTraining }: ModeSelectionProps) {
  return (
    <section className="screen content-screen">
      <div className="section-heading">
        <p className="eyebrow">Choose a mode</p>
        <h1>How do you want to train?</h1>
      </div>
      <div className="mode-grid">
        <article className="mode-card">
          <div>
            <p className="card-kicker">Enabled</p>
            <h2>Training Mode</h2>
            <p>
              Choose the strongest Socratic question from curated options and
              learn the pattern.
            </p>
          </div>
          <button
            className="primary-button"
            onClick={onStartTraining}
            type="button"
          >
            Start Training Mode
          </button>
        </article>
        <article className="mode-card disabled-card">
          <div>
            <p className="card-kicker">Future feature</p>
            <h2>Challenge Mode</h2>
            <p>Write your own questions and receive AI coaching. Coming soon.</p>
          </div>
          <button className="secondary-button" disabled type="button">
            Coming soon
          </button>
        </article>
      </div>
    </section>
  );
}
