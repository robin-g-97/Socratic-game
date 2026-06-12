"use client";

import { useMemo, useState } from "react";
import {
  formatDimensionName,
  getIdealDialoguePath,
  type ScoreSummary,
} from "@/lib/scoring";
import type { Scenario } from "@/types/scenario";

type ResultScreenProps = {
  scenario: Scenario;
  scoreSummary: ScoreSummary;
  onPlayAgain: () => void;
};

export function ResultScreen({
  scenario,
  scoreSummary,
  onPlayAgain,
}: ResultScreenProps) {
  const [showIdealPath, setShowIdealPath] = useState(false);
  const { decisionBlueprint } = scenario;
  const idealPath = useMemo(() => getIdealDialoguePath(scenario), [scenario]);
  const shareText =
    `I played The Socratic Analyst, a short BI dialogue game about asking better questions before building dashboards. ` +
    `My result: ${scoreSummary.resultBand.label}. The challenge: turn 'I need a dashboard to be in control' into a decision-ready requirement.`;

  async function copyShareText() {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      window.prompt("Copy your share text:", shareText);
    }
  }

  return (
    <section className="screen content-screen result-screen">
      <div className="result-hero">
        <p className="eyebrow">Result</p>
        <h1>{scoreSummary.resultBand.label}</h1>
        <p className="score-large">
          {scoreSummary.totalScore}<span>/{scenario.maxScore}</span>
        </p>
        <p>{scoreSummary.resultBand.feedback}</p>
        <div className="button-row">
          <button className="primary-button" onClick={onPlayAgain} type="button">
            Play again
          </button>
          <button
            className="secondary-button"
            onClick={copyShareText}
            type="button"
          >
            Copy share text
          </button>
          <button
            className="secondary-button"
            onClick={() => setShowIdealPath((current) => !current)}
            type="button"
          >
            {showIdealPath ? "Hide ideal path" : "Show ideal path"}
          </button>
        </div>
      </div>
      {showIdealPath && (
        <article className="ideal-path-panel">
          <div className="ideal-path-heading">
            <div>
              <p className="card-kicker">Best possible path</p>
              <h2>Ideal dialogue transcript</h2>
            </div>
            <span>{scenario.maxScore}/{scenario.maxScore}</span>
          </div>
          <div className="chat-window">
            {idealPath.map(({ turn, bestOption }, index) => (
              <div className="chat-turn" key={turn.id}>
                <div className="chat-message stakeholder-message">
                  <span>Stakeholder</span>
                  <p>{turn.stakeholderSays}</p>
                </div>
                <div className="chat-message analyst-message">
                  <span>Best question +{bestOption.score}</span>
                  <p>{bestOption.text}</p>
                </div>
                <div className="chat-message stakeholder-message response-message">
                  <span>Response</span>
                  <p>{bestOption.stakeholderResponse}</p>
                </div>
                {index < idealPath.length - 1 && (
                  <div className="chat-divider" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </article>
      )}
      <div className="result-grid">
        <article className="breakdown-panel">
          <h2>Score breakdown</h2>
          <div className="dimension-list">
            {scenario.dimensions.map((dimension) => (
              <div className="dimension-row" key={dimension}>
                <span>{formatDimensionName(dimension)}</span>
                <strong>{scoreSummary.dimensionTotals[dimension]}</strong>
              </div>
            ))}
          </div>
        </article>
        <article className="blueprint-panel">
          <h2>Decision blueprint</h2>
          <dl>
            <div>
              <dt>Original request</dt>
              <dd>{decisionBlueprint.originalRequest}</dd>
            </div>
            <div>
              <dt>Clarified need</dt>
              <dd>{decisionBlueprint.clarifiedNeed}</dd>
            </div>
            <div>
              <dt>Primary decision</dt>
              <dd>{decisionBlueprint.primaryDecision}</dd>
            </div>
            <div>
              <dt>User</dt>
              <dd>{decisionBlueprint.user}</dd>
            </div>
            <div>
              <dt>Suggested purpose</dt>
              <dd>{decisionBlueprint.suggestedPurpose}</dd>
            </div>
            <div>
              <dt>Better dashboard title</dt>
              <dd>{decisionBlueprint.betterDashboardTitle}</dd>
            </div>
          </dl>
          <div className="blueprint-lists">
            <div>
              <h3>Key signals</h3>
              <ul>
                {decisionBlueprint.keySignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Action categories</h3>
              <div className="tag-row">
                {decisionBlueprint.actionCategories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
