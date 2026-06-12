"use client";

import { useMemo, useState } from "react";
import type { Translation } from "@/lib/i18n";
import {
  formatDimensionName,
  getIdealDialoguePath,
  type ScoreSummary,
} from "@/lib/scoring";
import type { Scenario } from "@/types/scenario";

type ResultScreenProps = {
  copy: Translation["result"];
  scenario: Scenario;
  scoreSummary: ScoreSummary;
  onPlayAgain: () => void;
};

export function ResultScreen({
  copy,
  scenario,
  scoreSummary,
  onPlayAgain,
}: ResultScreenProps) {
  const [showIdealPath, setShowIdealPath] = useState(false);
  const { decisionBlueprint } = scenario;
  const idealPath = useMemo(() => getIdealDialoguePath(scenario), [scenario]);
  const shareText =
    `${copy.shareTextPrefix} ${copy.shareTextResult}: ${scoreSummary.resultBand.label}. ${copy.shareTextChallenge}`;

  async function copyShareText() {
    try {
      await navigator.clipboard.writeText(shareText);
    } catch {
      window.prompt(copy.copyPrompt, shareText);
    }
  }

  return (
    <section className="screen content-screen result-screen">
      <div className="result-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{scoreSummary.resultBand.label}</h1>
        <p className="score-large">
          {scoreSummary.totalScore}<span>/{scenario.maxScore}</span>
        </p>
        <p>{scoreSummary.resultBand.feedback}</p>
        <div className="button-row">
          <button className="primary-button" onClick={onPlayAgain} type="button">
            {copy.playAgain}
          </button>
          <button
            className="secondary-button"
            onClick={copyShareText}
            type="button"
          >
            {copy.copyShareText}
          </button>
          <button
            className="secondary-button"
            onClick={() => setShowIdealPath((current) => !current)}
            type="button"
          >
            {showIdealPath ? copy.hideIdealPath : copy.showIdealPath}
          </button>
        </div>
      </div>
      {showIdealPath && (
        <article className="ideal-path-panel">
          <div className="ideal-path-heading">
            <div>
              <p className="card-kicker">{copy.bestPath}</p>
              <h2>{copy.idealTranscript}</h2>
            </div>
            <span>{scenario.maxScore}/{scenario.maxScore}</span>
          </div>
          <div className="chat-window">
            <div className="chat-message stakeholder-message">
              <span>{copy.stakeholder}</span>
              <p>{scenario.opening}</p>
            </div>
            {idealPath.map(({ turn, bestOption }, index) => (
              <div className="chat-turn" key={turn.id}>
                <p className="chat-turn-label">
                  {copy.turn} {index + 1}
                </p>
                <div className="chat-message analyst-message">
                  <span>
                    {copy.bestQuestion} +{bestOption.score}
                  </span>
                  <p>{bestOption.text}</p>
                </div>
                <div className="chat-message stakeholder-message response-message">
                  <span>{copy.response}</span>
                  <p>{bestOption.stakeholderResponse}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      )}
      <div className="result-grid">
        <article className="breakdown-panel">
          <h2>{copy.scoreBreakdown}</h2>
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
          <h2>{copy.decisionBlueprint}</h2>
          <dl>
            <div>
              <dt>{copy.originalRequest}</dt>
              <dd>{decisionBlueprint.originalRequest}</dd>
            </div>
            <div>
              <dt>{copy.clarifiedNeed}</dt>
              <dd>{decisionBlueprint.clarifiedNeed}</dd>
            </div>
            <div>
              <dt>{copy.primaryDecision}</dt>
              <dd>{decisionBlueprint.primaryDecision}</dd>
            </div>
            <div>
              <dt>{copy.user}</dt>
              <dd>{decisionBlueprint.user}</dd>
            </div>
            <div>
              <dt>{copy.suggestedPurpose}</dt>
              <dd>{decisionBlueprint.suggestedPurpose}</dd>
            </div>
            <div>
              <dt>{copy.betterDashboardTitle}</dt>
              <dd>{decisionBlueprint.betterDashboardTitle}</dd>
            </div>
          </dl>
          <div className="blueprint-lists">
            <div>
              <h3>{copy.keySignals}</h3>
              <ul>
                {decisionBlueprint.keySignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{copy.actionCategories}</h3>
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
