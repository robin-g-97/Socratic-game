"use client";

import { useMemo, useState } from "react";
import { DialogueScreen } from "@/components/DialogueScreen";
import { LandingPage } from "@/components/LandingPage";
import { ModeSelection } from "@/components/ModeSelection";
import { ResultScreen } from "@/components/ResultScreen";
import { ScenarioSelection } from "@/components/ScenarioSelection";
import { ScenarioIntro } from "@/components/ScenarioIntro";
import {
  controlDashboardScenario,
  getScenarioById,
  scenarios,
} from "@/data/scenarios";
import { getPersonaById, personas } from "@/data/personas";
import { calculateScore } from "@/lib/scoring";
import type { DialogueOption } from "@/types/scenario";

type AppStep =
  | "landing"
  | "mode"
  | "scenario-selection"
  | "intro"
  | "dialogue"
  | "result";

export default function Home() {
  const [step, setStep] = useState<AppStep>("landing");
  const [selectedOptions, setSelectedOptions] = useState<DialogueOption[]>([]);
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    controlDashboardScenario.id,
  );
  const activeScenario = getScenarioById(selectedScenarioId);
  const activePersona = getPersonaById(activeScenario.personaId);

  const scoreSummary = useMemo(
    () => calculateScore(activeScenario, selectedOptions),
    [activeScenario, selectedOptions],
  );

  function restartGame() {
    setSelectedOptions([]);
    setStep("landing");
  }

  function startDialogue() {
    setSelectedOptions([]);
    setStep("dialogue");
  }

  return (
    <main>
      {step === "landing" && (
        <LandingPage onStart={() => setStep("mode")} />
      )}
      {step === "mode" && (
        <ModeSelection onStartTraining={() => setStep("scenario-selection")} />
      )}
      {step === "scenario-selection" && (
        <ScenarioSelection
          personas={personas}
          scenarios={scenarios}
          onSelectScenario={(scenarioId) => {
            setSelectedScenarioId(scenarioId);
            setSelectedOptions([]);
            setStep("intro");
          }}
        />
      )}
      {step === "intro" && (
        <ScenarioIntro
          scenario={activeScenario}
          persona={activePersona}
          onStart={startDialogue}
          onBack={() => setStep("scenario-selection")}
        />
      )}
      {step === "dialogue" && (
        <DialogueScreen
          scenario={activeScenario}
          persona={activePersona}
          score={scoreSummary.totalScore}
          selectedOptions={selectedOptions}
          onSelectOption={(option) =>
            setSelectedOptions((current) => [...current, option])
          }
          onComplete={() => setStep("result")}
        />
      )}
      {step === "result" && (
        <ResultScreen
          scenario={activeScenario}
          scoreSummary={scoreSummary}
          onPlayAgain={restartGame}
        />
      )}
    </main>
  );
}
