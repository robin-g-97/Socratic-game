import type { Persona } from "@/types/scenario";

export const personas: Persona[] = [
  {
    id: "charlie-finance-controller",
    name: "Charlie",
    role: "Finance Business Controller",
    dataMaturity: "High",
    context:
      "Charlie works with budget, actuals, forecasts, monthly reporting, and management information. They are comfortable with data and dashboards, but their requests often focus on indicators, thresholds, and variance analysis before the strategic purpose is fully clear.",
    typicalVagueRequest:
      "I want a dashboard that gives me more control over the organization. Right now I feel like I'm always too late.",
    blindSpot:
      "Charlie is data-focused and operationally sharp, but may move too quickly toward KPIs, thresholds, and financial control mechanics. The missing layer is often strategic intent: what management decision should this dashboard improve, and how does it connect to organizational priorities?",
    socraticChallenge:
      "Move from financial monitoring to decision relevance. Clarify what 'control' means, what action should happen earlier, and which deviations actually require management attention.",
    learningGoal:
      "Teach the player to connect finance data to strategic decision-making, not just reporting completeness.",
    playerMustUncover: [
      "what 'being in control' means in practice",
      "what decision currently comes too late",
      "which signals should trigger action",
      "what counts as material",
      "how to distinguish monitor, explain, and escalate",
      "how the dashboard supports management rhythm and prioritization",
    ],
  },
  {
    id: "riley-hr-business-partner",
    name: "Riley",
    role: "HR Business Partner",
    dataMaturity: "Low",
    context:
      "Riley works closely with managers and employees. They care about people, culture, leadership, engagement, wellbeing, and retention, but they are not very comfortable with data. They often ask for 'insight' without knowing what a good metric would be. They may treat soft constructs as if they are simple measurable things.",
    typicalVagueRequest:
      "I want a dashboard that shows how our people are doing.",
    alternativeRequest: "We need more insight into engagement and wellbeing.",
    blindSpot:
      "Riley has strong contextual knowledge but low data confidence. They may use broad human concepts such as engagement, wellbeing, safety, culture, or talent without defining them. They may also be afraid that dashboards will flatten human experience into simplistic numbers.",
    socraticChallenge:
      "Help Riley move from vague people concepts to careful, humane, decision-oriented measurement. The player should not dismiss the softness of HR topics, but should clarify what decision the data should support.",
    learningGoal:
      "Teach the player to handle low data maturity with cognitive empathy. The goal is not to force HR into hard metrics too quickly, but to clarify constructs, decisions, and ethical risks.",
    playerMustUncover: [
      "what 'how our people are doing' means",
      "whether the concern is engagement, workload, retention, absenteeism, psychological safety, leadership, or something else",
      "what decisions HR or managers could actually make based on the dashboard",
      "what should not be reduced to a single score",
      "what context or qualitative explanation is needed",
      "how to avoid misleading averages and harmful rankings",
    ],
    suggestedSocraticTension:
      "Riley wants insight but fears dehumanization. The player must build trust by asking questions that respect both the human context and the need for decision clarity.",
    exampleStrongQuestion:
      "When you say 'how our people are doing,' what is the decision you hope managers will make differently?",
    examplePoorQuestion:
      "Which HR KPIs do you want: absenteeism, turnover, or engagement score?",
  },
  {
    id: "morgan-technical-data-lead",
    name: "Morgan",
    role: "Technical Data Lead",
    dataMaturity: "Very high",
    context:
      "Morgan works on data platforms, semantic models, pipelines, governance, APIs, lineage, data quality, and architecture. They are technically fluent and use many technical terms. They may be focused on building a scalable, governed, technically elegant solution, but the business decision can get lost in the architecture.",
    typicalVagueRequest:
      "We should create a governed semantic layer with domain-aligned metrics, lineage, certified datasets, and AI-ready data products.",
    alternativeRequest:
      "We need a scalable data product architecture so the business can self-serve.",
    blindSpot:
      "Morgan may confuse technical readiness with decision readiness. The request sounds mature, but the player must test whether the technical solution is connected to a real user, decision, workflow, or adoption problem.",
    socraticChallenge:
      "Translate technical architecture language into business value. Clarify which decisions the semantic layer should improve, who will use it, and what failure the architecture is meant to prevent.",
    learningGoal:
      "Teach the player not to be intimidated by technical jargon. The goal is to respectfully unpack terms like semantic layer, data product, governance, lineage, certified metric, self-service, and AI-ready.",
    playerMustUncover: [
      "who the user of the data product is",
      "what decision or workflow should improve",
      "what problem current architecture creates",
      "which definitions are contested",
      "where governance helps versus slows down",
      "what adoption behavior should change",
      "how to define success beyond technical completion",
    ],
    suggestedSocraticTension:
      "Morgan sounds precise, but many terms hide assumptions. The player must separate genuine technical constraints from abstract architecture ambition.",
    exampleStrongQuestion:
      "What business decision becomes easier or safer once this semantic layer exists?",
    examplePoorQuestion:
      "Should we use a lakehouse, warehouse, or medallion architecture?",
  },
];

export function getPersonaById(personaId: string): Persona {
  const persona = personas.find((item) => item.id === personaId);

  if (!persona) {
    throw new Error(`Unknown persona: ${personaId}`);
  }

  return persona;
}
