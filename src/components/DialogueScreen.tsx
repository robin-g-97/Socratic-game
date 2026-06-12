import { useState } from "react";
import type { Translation } from "@/lib/i18n";
import type { DialogueOption, Persona, Scenario } from "@/types/scenario";

type DialogueScreenProps = {
  copy: Translation["dialogue"];
  scenario: Scenario;
  persona: Persona;
  score: number;
  selectedOptions: DialogueOption[];
  onSelectOption: (option: DialogueOption) => void;
  onComplete: () => void;
};

export function DialogueScreen({
  copy,
  scenario,
  persona,
  score,
  selectedOptions,
  onSelectOption,
  onComplete,
}: DialogueScreenProps) {
  const [activeTurnIndex, setActiveTurnIndex] = useState(0);
  const currentTurn = scenario.turns[activeTurnIndex];
  const selectedOption = selectedOptions[activeTurnIndex];
  const isAnswered = Boolean(selectedOption);
  const progress = Math.min(activeTurnIndex + 1, scenario.turns.length);

  function handleNext() {
    if (activeTurnIndex >= scenario.turns.length - 1) {
      onComplete();
      return;
    }

    setActiveTurnIndex((current) => current + 1);
  }

  if (!currentTurn) {
    onComplete();
    return null;
  }

  return (
    <section className="screen content-screen dialogue-screen">
      <div className="dialogue-topbar">
        <div>
          <p className="eyebrow">
            {copy.turn} {progress} {copy.of} {scenario.turns.length}
          </p>
          <h1>{copy.title}</h1>
        </div>
        <div className="score-pill">
          <span>{copy.score}</span>
          <strong>
            {score}/{scenario.maxScore}
          </strong>
        </div>
      </div>
      <div className="dialogue-grid">
        <aside className="stakeholder-card compact-card">
          <p className="card-kicker">{copy.stakeholder}</p>
          <h2>{persona.name}</h2>
          <p className="role-label">{persona.role}</p>
          <p>{persona.context}</p>
          <p className="data-maturity">
            {copy.dataMaturity}: {persona.dataMaturity}
          </p>
        </aside>
        <div className="dialogue-main">
          <article className="quote-panel current-message">
            <p>&quot;{currentTurn.stakeholderSays}&quot;</p>
          </article>
          <div className="options-list" aria-label={copy.chooseQuestion}>
            {currentTurn.options.map((option) => {
              const isSelected = selectedOption?.id === option.id;

              return (
                <button
                  className={`option-button ${isSelected ? "selected" : ""}`}
                  disabled={isAnswered}
                  key={option.id}
                  onClick={() => onSelectOption(option)}
                  type="button"
                >
                  <span>{option.text}</span>
                  {isSelected && <strong>+{option.score}</strong>}
                </button>
              );
            })}
          </div>
          {selectedOption && (
            <div className="feedback-panel">
              <div>
                <p className="card-kicker">{copy.coaching}</p>
                <p>{selectedOption.feedback}</p>
              </div>
              <div>
                <p className="card-kicker">
                  {persona.name} {copy.responds}
                </p>
                <p>&quot;{selectedOption.stakeholderResponse}&quot;</p>
              </div>
              <button
                className="primary-button"
                onClick={handleNext}
                type="button"
              >
                {activeTurnIndex >= scenario.turns.length - 1
                  ? copy.viewResult
                  : copy.next}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
