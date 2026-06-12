export type Dimension =
  | "conceptual_clarity"
  | "decision_alignment"
  | "assumption_detection"
  | "cognitive_empathy"
  | "buildability";

export type DataMaturity = "Low" | "High" | "Very high";

export type Persona = {
  id: string;
  name: string;
  role: string;
  dataMaturity: DataMaturity;
  context: string;
  typicalVagueRequest: string;
  alternativeRequest?: string;
  blindSpot: string;
  socraticChallenge: string;
  learningGoal: string;
  playerMustUncover: string[];
  suggestedSocraticTension?: string;
  exampleStrongQuestion?: string;
  examplePoorQuestion?: string;
};

export type DialogueOption = {
  id: string;
  text: string;
  score: number;
  dimension: Dimension;
  feedback: string;
  stakeholderResponse: string;
};

export type DialogueTurn = {
  id: string;
  stakeholderSays: string;
  options: DialogueOption[];
};

export type ResultBand = {
  min: number;
  max: number;
  label: string;
  feedback: string;
};

export type DecisionBlueprint = {
  originalRequest: string;
  clarifiedNeed: string;
  primaryDecision: string;
  user: string;
  keySignals: string[];
  actionCategories: string[];
  safeguards?: string[];
  governancePrinciples?: string[];
  suggestedPurpose: string;
  betterDashboardTitle: string;
};

export type Scenario = {
  id: string;
  personaId: string;
  title: string;
  subtitle: string;
  status: "available" | "coming-soon";
  opening: string;
  learningGoal: string;
  whatPlayerMustUncover: string[];
  maxScore: number;
  dimensions: Dimension[];
  turns: DialogueTurn[];
  resultBands: ResultBand[];
  decisionBlueprint: DecisionBlueprint;
};
