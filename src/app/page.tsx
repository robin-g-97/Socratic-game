"use client";

import { useMemo, useState } from "react";
import { DialogueScreen } from "@/components/DialogueScreen";
import { LandingPage } from "@/components/LandingPage";
import { LanguageToggle } from "@/components/LanguageToggle";
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
import { type Locale, translations } from "@/lib/i18n";
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
  const [locale, setLocale] = useState<Locale>("en");
  const [step, setStep] = useState<AppStep>("landing");
  const [selectedOptions, setSelectedOptions] = useState<DialogueOption[]>([]);
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    controlDashboardScenario.id,
  );
  const activeScenario = getScenarioById(selectedScenarioId);
  const activePersona = getPersonaById(activeScenario.personaId);
  const t = translations[locale];

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
      <LanguageToggle
        labels={t.language}
        locale={locale}
        onChange={setLocale}
      />
      {step === "landing" && (
        <LandingPage copy={t.landing} onStart={() => setStep("mode")} />
      )}
      {step === "mode" && (
        <ModeSelection
          copy={t.mode}
          onStartTraining={() => setStep("scenario-selection")}
        />
      )}
      {step === "scenario-selection" && (
        <ScenarioSelection
          copy={t.scenarioSelection}
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
          copy={t.intro}
          scenario={activeScenario}
          persona={activePersona}
          onStart={startDialogue}
          onBack={() => setStep("scenario-selection")}
        />
      )}
      {step === "dialogue" && (
        <DialogueScreen
          copy={t.dialogue}
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
          copy={t.result}
          scenario={activeScenario}
          scoreSummary={scoreSummary}
          onPlayAgain={restartGame}
        />
      )}
    </main>
  );
}
