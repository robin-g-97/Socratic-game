import type { Scenario } from "@/types/scenario";

export const controlDashboardScenario: Scenario = {
  id: "business-controller-control-dashboard",
  personaId: "charlie-finance-controller",
  title: "The Business Controller Who Wants Control",
  subtitle:
    "Help a business controller turn a vague dashboard request into a decision-ready requirement.",
  status: "available",
  opening:
    "I want a dashboard that gives me more control over the organization. Right now I feel like I'm always too late.",
  learningGoal:
    "Teach the player to connect finance data to strategic decision-making, not just reporting completeness.",
  whatPlayerMustUncover: [
    "what 'being in control' means in practice",
    "what decision currently comes too late",
    "which signals should trigger action",
    "what counts as material",
    "how to distinguish monitor, explain, and escalate",
    "how the dashboard supports management rhythm and prioritization",
  ],
  maxScore: 30,
  dimensions: [
    "conceptual_clarity",
    "decision_alignment",
    "assumption_detection",
    "cognitive_empathy",
    "buildability",
  ],
  turns: [
    {
      id: "turn-1",
      stakeholderSays:
        "I want a dashboard that gives me more control over the organization. Right now I feel like I'm always too late.",
      options: [
        {
          id: "1a",
          text: "Which KPIs do you want on the dashboard?",
          score: 2,
          dimension: "buildability",
          feedback:
            "This is practical, but too early. You accept the dashboard framing before clarifying the problem.",
          stakeholderResponse:
            "I'm not fully sure yet. Probably budget, actuals, forecast, and maybe some operational numbers.",
        },
        {
          id: "1b",
          text: "What does 'control' mean in a concrete situation where you currently feel too late?",
          score: 5,
          dimension: "conceptual_clarity",
          feedback:
            "Strong Socratic move. You clarify the vague concept by asking for a concrete situation.",
          stakeholderResponse:
            "Usually I only see after month-end that a department has overspent. By then the meeting has already happened, and I'm mostly explaining the past.",
        },
        {
          id: "1c",
          text: "Would you prefer the dashboard in Power BI or Excel?",
          score: 1,
          dimension: "buildability",
          feedback:
            "This jumps to implementation before understanding the decision need.",
          stakeholderResponse:
            "Power BI, I think. But the real issue is that I do not know soon enough where attention is needed.",
        },
      ],
    },
    {
      id: "turn-2",
      stakeholderSays:
        "Usually I only see after month-end that a department has overspent. By then the meeting has already happened, and I'm mostly explaining the past.",
      options: [
        {
          id: "2a",
          text: "So the dashboard should show actuals versus budget by department?",
          score: 3,
          dimension: "buildability",
          feedback:
            "Useful, but still solution-first. You are starting to design before clarifying the intervention.",
          stakeholderResponse:
            "Yes, but not only that. I need to know what deserves action.",
        },
        {
          id: "2b",
          text: "What would you want to do earlier if you saw the overspend in time?",
          score: 5,
          dimension: "decision_alignment",
          feedback:
            "Excellent. This shifts the conversation from information to action.",
          stakeholderResponse:
            "I'd want to contact the budget owner earlier, ask for an explanation, and see whether the forecast needs to be adjusted.",
        },
        {
          id: "2c",
          text: "Can Finance deliver the data more quickly?",
          score: 3,
          dimension: "assumption_detection",
          feedback:
            "Relevant, but it narrows the issue to data availability before clarifying the business action.",
          stakeholderResponse:
            "Sometimes, but even when the data is available, I still need to know where to focus.",
        },
      ],
    },
    {
      id: "turn-3",
      stakeholderSays:
        "I'd want to contact the budget owner earlier, ask for an explanation, and see whether the forecast needs to be adjusted.",
      options: [
        {
          id: "3a",
          text: "When exactly should the dashboard trigger follow-up with a budget owner?",
          score: 5,
          dimension: "buildability",
          feedback:
            "Strong. You are turning the vague need into an actionable threshold.",
          stakeholderResponse:
            "Good question. Not every deviation matters. I think I'd want to see departments where the YTD deviation is material, or where the trend suggests they will exceed budget by year-end.",
        },
        {
          id: "3b",
          text: "Do you want a table with all departments and cost categories?",
          score: 2,
          dimension: "buildability",
          feedback:
            "This may become useful later, but it risks creating a data dump.",
          stakeholderResponse:
            "Maybe, but I mainly want to know which areas need attention.",
        },
        {
          id: "3c",
          text: "Would a red-yellow-green traffic light visual help?",
          score: 1,
          dimension: "buildability",
          feedback:
            "Too visual too soon. You are designing the interface before defining the rule behind the signal.",
          stakeholderResponse:
            "Maybe, but only if the colours actually mean something.",
        },
      ],
    },
    {
      id: "turn-4",
      stakeholderSays:
        "Not every deviation matters. I think I'd want to see departments where the YTD deviation is material, or where the trend suggests they will exceed budget by year-end.",
      options: [
        {
          id: "4a",
          text: "What counts as material: a percentage, an absolute amount, or both?",
          score: 5,
          dimension: "conceptual_clarity",
          feedback:
            "Excellent. 'Material' is another vague but critical concept. You make it operational.",
          stakeholderResponse:
            "Probably both. A 10% deviation matters for smaller departments, but for larger departments we also need an absolute threshold. Maybe anything above \u20ac50k or 8% should be flagged.",
        },
        {
          id: "4b",
          text: "Should we use AI to predict year-end overspend?",
          score: 2,
          dimension: "assumption_detection",
          feedback:
            "Possibly relevant later, but this jumps to a solution before defining the decision rule.",
          stakeholderResponse:
            "Maybe someday, but I first need a clear way to identify the risky areas.",
        },
        {
          id: "4c",
          text: "Which departments should be included?",
          score: 3,
          dimension: "buildability",
          feedback:
            "Relevant scoping question, but less important than defining what counts as material.",
          stakeholderResponse:
            "All departments eventually, but the main thing is to avoid noise.",
        },
      ],
    },
    {
      id: "turn-5",
      stakeholderSays: "Maybe anything above \u20ac50k or 8% should be flagged.",
      options: [
        {
          id: "5a",
          text: "Should every flagged item require the same action?",
          score: 5,
          dimension: "assumption_detection",
          feedback:
            "Strong. You challenge the assumption that every signal means the same thing.",
          stakeholderResponse:
            "No. Some items only need monitoring. Others need an explanation from the budget owner. And in serious cases, we need to escalate to management.",
        },
        {
          id: "5b",
          text: "Great, then I'll build a red flag measure.",
          score: 2,
          dimension: "buildability",
          feedback:
            "Practical, but premature. You have a threshold, but not yet the workflow around it.",
          stakeholderResponse:
            "That helps, but a red flag alone does not tell me what to do next.",
        },
        {
          id: "5c",
          text: "Do you want the threshold to be adjustable?",
          score: 3,
          dimension: "buildability",
          feedback:
            "Useful feature question, but it does not yet clarify the decision process.",
          stakeholderResponse:
            "Yes, probably. But more importantly, I need to separate small issues from things that need action.",
        },
      ],
    },
    {
      id: "turn-6",
      stakeholderSays:
        "Some items only need monitoring. Others need an explanation from the budget owner. And in serious cases, we need to escalate to management.",
      options: [
        {
          id: "6a",
          text: "So should the dashboard distinguish between monitor, explain, and escalate?",
          score: 5,
          dimension: "decision_alignment",
          feedback:
            "Excellent. You are converting information into decision categories.",
          stakeholderResponse:
            "Yes, exactly. I don't just need numbers. I need to know what deserves attention before the review.",
        },
        {
          id: "6b",
          text: "Should I add drillthrough pages?",
          score: 2,
          dimension: "buildability",
          feedback:
            "This may help later, but the core decision categories matter first.",
          stakeholderResponse:
            "Drillthrough would be useful, but only after the dashboard tells me where to look.",
        },
        {
          id: "6c",
          text: "Can we schedule a weekly refresh?",
          score: 2,
          dimension: "buildability",
          feedback:
            "Refresh rhythm matters, but you first need to define how the information will be used.",
          stakeholderResponse:
            "Weekly would help, but the bigger question is what signal tells me to act.",
        },
      ],
    },
  ],
  resultBands: [
    {
      min: 26,
      max: 30,
      label: "Socratic Analyst",
      feedback:
        "You consistently clarified vague concepts before moving to solutions. You turned 'control' into a concrete decision workflow: monitor, explain, escalate.",
    },
    {
      min: 21,
      max: 25,
      label: "Strong Analytics Translator",
      feedback:
        "You asked strong decision-oriented questions, but occasionally moved toward dashboard design before fully clarifying the business action.",
    },
    {
      min: 16,
      max: 20,
      label: "Practical BI Builder",
      feedback:
        "You found some useful requirements, but accepted several vague terms too quickly. Try asking what decision, action, or behaviour should change.",
    },
    {
      min: 10,
      max: 15,
      label: "Solution Jumper",
      feedback:
        "You jumped to KPIs, visuals, or tooling before understanding the stakeholder's problem. Slow down and clarify the concept behind the request.",
    },
    {
      min: 0,
      max: 9,
      label: "Dashboard Order Taker",
      feedback:
        "You mainly acted as a dashboard order taker. A Socratic analyst first investigates meaning, assumptions, and decisions before building.",
    },
  ],
  decisionBlueprint: {
    originalRequest: "I want a dashboard to be more in control.",
    clarifiedNeed:
      "The business controller needs to identify departments that require attention before the monthly review.",
    primaryDecision:
      "Which departments or cost categories require monitoring, explanation, or escalation?",
    user: "Business controller preparing monthly management conversations.",
    keySignals: [
      "YTD actuals versus budget",
      "Material deviation using both percentage and absolute thresholds",
      "Expected year-end overspend",
      "Explanation status",
      "Budget owner follow-up status",
    ],
    actionCategories: ["Monitor", "Explain", "Escalate"],
    suggestedPurpose:
      "Help business controllers prioritize follow-up before the monthly review by surfacing material deviations, forecast risks, and missing explanations.",
    betterDashboardTitle:
      "Departments requiring financial attention before monthly review",
  },
};

export const rileyHrPeopleDashboardScenario: Scenario = {
  id: "hr-people-dashboard",
  personaId: "riley-hr-business-partner",
  title: "The People Dashboard",
  subtitle:
    "Help an HR Business Partner turn a vague people-focused request into a careful, decision-ready dashboard concept.",
  status: "available",
  opening:
    "I want a dashboard that shows how our people are doing. We need more insight into engagement and wellbeing.",
  learningGoal:
    "Teach the player to handle low data maturity with cognitive empathy. The goal is not to force HR into hard metrics too quickly, but to clarify constructs, decisions, and ethical risks.",
  whatPlayerMustUncover: [
    "what 'how our people are doing' means",
    "whether the concern is engagement, workload, retention, absenteeism, psychological safety, leadership, or something else",
    "what decisions HR or managers could actually make based on the dashboard",
    "what should not be reduced to a single score",
    "what context or qualitative explanation is needed",
    "how to avoid misleading averages and harmful rankings",
  ],
  maxScore: 30,
  dimensions: [
    "conceptual_clarity",
    "decision_alignment",
    "assumption_detection",
    "cognitive_empathy",
    "buildability"
  ],
  turns: [
    {
      id: "turn-1",
      stakeholderSays:
        "I want a dashboard that shows how our people are doing. We need more insight into engagement and wellbeing.",
      options: [
        {
          id: "1a",
          text: "Which HR KPIs do you want: absenteeism, turnover, or engagement score?",
          score: 2,
          dimension: "buildability",
          feedback:
            "This is practical, but too early. You jump to standard HR metrics before clarifying what Riley means by people doing well.",
          stakeholderResponse:
            "Those might be useful, but I’m not sure they really capture what I mean."
        },
        {
          id: "1b",
          text: "When you say ‘how our people are doing,’ what are you most worried might be happening?",
          score: 5,
          dimension: "conceptual_clarity",
          feedback:
            "Strong Socratic move. You clarify the vague human concept by asking for the concern behind it.",
          stakeholderResponse:
            "I’m worried teams are overloaded, but managers only notice when absenteeism rises or people leave."
        },
        {
          id: "1c",
          text: "Do you want this dashboard to be available to all managers?",
          score: 3,
          dimension: "cognitive_empathy",
          feedback:
            "This is relevant, especially for HR sensitivity, but it is not yet the core clarification.",
          stakeholderResponse:
            "Eventually maybe, but I’m nervous about managers misinterpreting the numbers."
        }
      ]
    },
    {
      id: "turn-2",
      stakeholderSays:
        "I’m worried teams are overloaded, but managers only notice when absenteeism rises or people leave.",
      options: [
        {
          id: "2a",
          text: "What would managers do differently if they saw overload earlier?",
          score: 5,
          dimension: "decision_alignment",
          feedback:
            "Excellent. You move from insight to action and make the dashboard purpose concrete.",
          stakeholderResponse:
            "They could redistribute work, check in earlier, or start a conversation about priorities."
        },
        {
          id: "2b",
          text: "Should we calculate an overload score per team?",
          score: 2,
          dimension: "buildability",
          feedback:
            "This may become useful later, but it reduces a sensitive construct to a score before defining it carefully.",
          stakeholderResponse:
            "Maybe, but I’m afraid a single score would be too simplistic."
        },
        {
          id: "2c",
          text: "Can we combine absenteeism and turnover in one visual?",
          score: 1,
          dimension: "buildability",
          feedback:
            "This jumps to visual design before understanding the decision or ethical risk.",
          stakeholderResponse:
            "I suppose we could, but that still feels reactive."
        }
      ]
    },
    {
      id: "turn-3",
      stakeholderSays:
        "They could redistribute work, check in earlier, or start a conversation about priorities.",
      options: [
        {
          id: "3a",
          text: "Which signals would suggest a team needs a conversation rather than a judgment?",
          score: 5,
          dimension: "cognitive_empathy",
          feedback:
            "Very strong. You preserve the human context and frame the dashboard as a trigger for dialogue, not a ranking system.",
          stakeholderResponse:
            "That’s important. I’d rather flag patterns like rising workload, repeated overtime, declining survey comments, and absenteeism trends."
        },
        {
          id: "3b",
          text: "Should we rank teams from best to worst?",
          score: 1,
          dimension: "assumption_detection",
          feedback:
            "This creates a harmful incentive and risks turning HR insight into simplistic performance judgment.",
          stakeholderResponse:
            "No, that is exactly what I want to avoid."
        },
        {
          id: "3c",
          text: "How often should the dashboard refresh?",
          score: 2,
          dimension: "buildability",
          feedback:
            "Refresh rhythm matters, but it is secondary to defining what responsible interpretation looks like.",
          stakeholderResponse:
            "Monthly is probably enough, but only if people understand what the numbers do and do not mean."
        }
      ]
    },
    {
      id: "turn-4",
      stakeholderSays:
        "I’d rather flag patterns like rising workload, repeated overtime, declining survey comments, and absenteeism trends.",
      options: [
        {
          id: "4a",
          text: "What context should always be shown before someone interprets those signals?",
          score: 5,
          dimension: "assumption_detection",
          feedback:
            "Excellent. You challenge the assumption that signals are self-explanatory and protect against misleading interpretation.",
          stakeholderResponse:
            "We should show team size, recent reorganizations, vacancies, seasonality, and maybe whether there are known workload peaks."
        },
        {
          id: "4b",
          text: "Can we make all signals red when they get worse?",
          score: 2,
          dimension: "buildability",
          feedback:
            "This is too blunt. HR signals need careful framing because deterioration can have multiple causes.",
          stakeholderResponse:
            "That might make managers panic or blame teams without understanding context."
        },
        {
          id: "4c",
          text: "Should we use AI sentiment analysis on comments?",
          score: 2,
          dimension: "buildability",
          feedback:
            "Potentially useful later, but it introduces technical and ethical complexity before clarifying the interpretation process.",
          stakeholderResponse:
            "Maybe later, but I would want to be very careful with employee comments."
        }
      ]
    },
    {
      id: "turn-5",
      stakeholderSays:
        "We should show team size, recent reorganizations, vacancies, seasonality, and maybe whether there are known workload peaks.",
      options: [
        {
          id: "5a",
          text: "What should the dashboard explicitly not be used for?",
          score: 5,
          dimension: "assumption_detection",
          feedback:
            "Strong. You surface ethical boundaries and prevent misuse of sensitive HR data.",
          stakeholderResponse:
            "It should not be used to punish managers or label teams as unhealthy. It should support early conversation."
        },
        {
          id: "5b",
          text: "Should we add more filters for department, manager, and contract type?",
          score: 3,
          dimension: "buildability",
          feedback:
            "Useful later, but HR dashboards require clear governance before adding granular slicing.",
          stakeholderResponse:
            "Maybe, but I worry about privacy if the groups become too small."
        },
        {
          id: "5c",
          text: "Do you want a monthly PDF export?",
          score: 1,
          dimension: "buildability",
          feedback:
            "This jumps to delivery format before the decision logic and safeguards are clear.",
          stakeholderResponse:
            "Maybe eventually, but that is not the main issue."
        }
      ]
    },
    {
      id: "turn-6",
      stakeholderSays:
        "It should not be used to punish managers or label teams as unhealthy. It should support early conversation.",
      options: [
        {
          id: "6a",
          text: "So should the dashboard identify teams that may need a supportive check-in, with context and safeguards against ranking?",
          score: 5,
          dimension: "decision_alignment",
          feedback:
            "Excellent. You translate the need into a humane, decision-ready dashboard purpose.",
          stakeholderResponse:
            "Yes. I want it to help us start better conversations earlier, not reduce people to numbers."
        },
        {
          id: "6b",
          text: "Should we call the main metric the People Health Score?",
          score: 2,
          dimension: "conceptual_clarity",
          feedback:
            "The label sounds attractive, but it risks overclaiming what the metric can validly measure.",
          stakeholderResponse:
            "That sounds too definitive. I don’t think we can measure people’s health with one number."
        },
        {
          id: "6c",
          text: "Can HR own the dashboard and send it to managers?",
          score: 3,
          dimension: "buildability",
          feedback:
            "Ownership matters, but the stronger move is to define the action and interpretation rules first.",
          stakeholderResponse:
            "HR should probably guide the interpretation, but managers need to use it responsibly."
        }
      ]
    }
  ],
  resultBands: [
    {
      min: 26,
      max: 30,
      label: "Human-Centered Socratic Analyst",
      feedback:
        "You clarified vague HR concepts without flattening them into simplistic metrics. You turned a people dashboard request into a responsible early-conversation tool."
    },
    {
      min: 21,
      max: 25,
      label: "Careful Analytics Translator",
      feedback:
        "You balanced data and human context well, though you occasionally moved toward metrics before fully defining interpretation and safeguards."
    },
    {
      min: 16,
      max: 20,
      label: "Practical People Data Builder",
      feedback:
        "You found useful HR data points, but sometimes accepted broad constructs too quickly. Try clarifying what the data should help people do differently."
    },
    {
      min: 10,
      max: 15,
      label: "Metric-First HR Analyst",
      feedback:
        "You moved too quickly toward KPIs and dashboards. HR topics require careful construct clarification, context, and ethical boundaries."
    },
    {
      min: 0,
      max: 9,
      label: "People Scorecard Order Taker",
      feedback:
        "You mainly translated the request into standard HR metrics. A stronger Socratic analyst protects the human context before designing the dashboard."
    }
  ],
  decisionBlueprint: {
    originalRequest:
      "I want a dashboard that shows how our people are doing.",
    clarifiedNeed:
      "Riley needs to identify teams that may require a supportive check-in before issues become visible through absenteeism or turnover.",
    primaryDecision:
      "Which teams may need an early conversation about workload, priorities, or support?",
    user:
      "HR Business Partner and managers responsible for employee wellbeing and team support.",
    keySignals: [
      "Workload trends",
      "Repeated overtime",
      "Absenteeism trends",
      "Vacancies and team size",
      "Recent reorganizations",
      "Survey themes or qualitative signals",
      "Known seasonal workload peaks"
    ],
    actionCategories: ["Observe", "Check in", "Support", "Escalate carefully"],
    safeguards: [
      "Do not rank teams from best to worst",
      "Do not reduce wellbeing to a single definitive score",
      "Always show context before interpretation",
      "Avoid small-group privacy risks",
      "Frame the dashboard as a conversation starter, not a judgment tool"
    ],
    suggestedPurpose:
      "Help HR and managers identify where supportive conversations may be needed earlier, using contextual people signals without reducing employees to simplistic scores.",
    betterDashboardTitle:
      "Teams that may need support: early signals and context"
  }
};

export const morganSemanticLayerScenario: Scenario = {
  id: "technical-semantic-layer",
  personaId: "morgan-technical-data-lead",
  title: "The Semantic Layer Pitch",
  subtitle:
    "Help a technical data lead translate architecture ambition into decision relevance.",
  status: "available",
  opening:
    "We should create a governed semantic layer with domain-aligned metrics, lineage, certified datasets, and AI-ready data products.",
  learningGoal:
    "Teach the player not to be intimidated by technical jargon. The goal is to respectfully unpack terms like semantic layer, data product, governance, lineage, certified metric, self-service, and AI-ready.",
  whatPlayerMustUncover: [
    "who the user of the data product is",
    "what decision or workflow should improve",
    "what problem current architecture creates",
    "which definitions are contested",
    "where governance helps versus slows down",
    "what adoption behavior should change",
    "how to define success beyond technical completion",
  ],
  maxScore: 30,
  dimensions: [
    "conceptual_clarity",
    "decision_alignment",
    "assumption_detection",
    "cognitive_empathy",
    "buildability"
  ],
  turns: [
    {
      id: "turn-1",
      stakeholderSays:
        "We should create a governed semantic layer with domain-aligned metrics, lineage, certified datasets, and AI-ready data products.",
      options: [
        {
          id: "1a",
          text: "What business decision becomes easier or safer once this semantic layer exists?",
          score: 5,
          dimension: "decision_alignment",
          feedback:
            "Excellent. You respectfully cut through the jargon and connect the architecture to decision value.",
          stakeholderResponse:
            "The main issue is that different teams use different definitions for the same KPIs, so management discussions get stuck."
        },
        {
          id: "1b",
          text: "Should we use a lakehouse, warehouse, or medallion architecture?",
          score: 2,
          dimension: "buildability",
          feedback:
            "This matches Morgan’s technical language, but it stays inside the solution space before clarifying business value.",
          stakeholderResponse:
            "Probably lakehouse with a medallion pattern, but that is not the only thing we need to solve."
        },
        {
          id: "1c",
          text: "Which tool do you want to use for the semantic model?",
          score: 1,
          dimension: "buildability",
          feedback:
            "Too implementation-focused. The tool choice should follow from the decision and adoption problem.",
          stakeholderResponse:
            "Tooling matters, but we already have too many tool discussions."
        }
      ]
    },
    {
      id: "turn-2",
      stakeholderSays:
        "The main issue is that different teams use different definitions for the same KPIs, so management discussions get stuck.",
      options: [
        {
          id: "2a",
          text: "Which KPI causes the most friction in management discussions today?",
          score: 5,
          dimension: "conceptual_clarity",
          feedback:
            "Strong. You move from abstract governance to a concrete contested concept.",
          stakeholderResponse:
            "Revenue, margin, and active customers are the usual ones. Everyone thinks their definition is obvious."
        },
        {
          id: "2b",
          text: "Should we create a central data catalog?",
          score: 3,
          dimension: "buildability",
          feedback:
            "A catalog may help, but you first need to identify the contested definitions and decision context.",
          stakeholderResponse:
            "Yes, but a catalog alone does not make people agree on definitions."
        },
        {
          id: "2c",
          text: "Can we solve this by certifying all datasets?",
          score: 2,
          dimension: "assumption_detection",
          feedback:
            "Certification helps technical trust, but it does not automatically solve semantic disagreement.",
          stakeholderResponse:
            "Not completely. People can still use certified data differently."
        }
      ]
    },
    {
      id: "turn-3",
      stakeholderSays:
        "Revenue, margin, and active customers are the usual ones. Everyone thinks their definition is obvious.",
      options: [
        {
          id: "3a",
          text: "In which recurring decision does this disagreement create the most damage?",
          score: 5,
          dimension: "decision_alignment",
          feedback:
            "Excellent. You connect semantic disagreement to organizational consequences.",
          stakeholderResponse:
            "Monthly performance review. Leaders debate whose number is right instead of deciding what to do."
        },
        {
          id: "3b",
          text: "Should we define one enterprise-wide version of every metric?",
          score: 3,
          dimension: "assumption_detection",
          feedback:
            "Relevant, but potentially too rigid. Some metrics may need context-specific definitions.",
          stakeholderResponse:
            "That sounds clean, but domains sometimes have legitimate differences."
        },
        {
          id: "3c",
          text: "Can we add descriptions to every metric?",
          score: 2,
          dimension: "buildability",
          feedback:
            "Descriptions are useful, but documentation alone may not change decision behavior.",
          stakeholderResponse:
            "We already document things. The problem is that people do not always use the same logic."
        }
      ]
    },
    {
      id: "turn-4",
      stakeholderSays:
        "Monthly performance review. Leaders debate whose number is right instead of deciding what to do.",
      options: [
        {
          id: "4a",
          text: "Which definitions must be standardized, and where is local variation legitimate?",
          score: 5,
          dimension: "assumption_detection",
          feedback:
            "Very strong. You avoid false standardization and create space for governed flexibility.",
          stakeholderResponse:
            "Good point. Board-level KPIs need one definition, but operational teams may need local variants as long as they are clearly labeled."
        },
        {
          id: "4b",
          text: "Should we block non-certified metrics from reports?",
          score: 2,
          dimension: "assumption_detection",
          feedback:
            "This may be too heavy-handed. Governance should improve decisions, not just restrict users.",
          stakeholderResponse:
            "That could backfire. People might build shadow reports."
        },
        {
          id: "4c",
          text: "Do we need better lineage diagrams?",
          score: 3,
          dimension: "buildability",
          feedback:
            "Lineage can help trust, but the bigger question is how definitions are governed and used in decisions.",
          stakeholderResponse:
            "Lineage matters, especially for trust, but it won’t settle all definition debates."
        }
      ]
    },
    {
      id: "turn-5",
      stakeholderSays:
        "Board-level KPIs need one definition, but operational teams may need local variants as long as they are clearly labeled.",
      options: [
        {
          id: "5a",
          text: "Who should own the definition when there is disagreement?",
          score: 5,
          dimension: "buildability",
          feedback:
            "Strong. You translate semantic governance into ownership and decision rights.",
          stakeholderResponse:
            "We need domain owners and a governance forum. Otherwise the data team becomes the referee for business definitions."
        },
        {
          id: "5b",
          text: "Should the data team write the definitions?",
          score: 2,
          dimension: "assumption_detection",
          feedback:
            "This risks making a business definition problem look like a technical documentation task.",
          stakeholderResponse:
            "The data team can facilitate, but business owners need to decide."
        },
        {
          id: "5c",
          text: "Should we create a dashboard showing certified versus uncertified reports?",
          score: 3,
          dimension: "buildability",
          feedback:
            "This might support governance later, but ownership of definitions is more fundamental.",
          stakeholderResponse:
            "That could help adoption, but first we need agreement on who decides."
        }
      ]
    },
    {
      id: "turn-6",
      stakeholderSays:
        "We need domain owners and a governance forum. Otherwise the data team becomes the referee for business definitions.",
      options: [
        {
          id: "6a",
          text: "So should the first version focus on a small set of board-level KPIs used in monthly performance review, with clear owners, definitions, lineage, and approved variants?",
          score: 5,
          dimension: "decision_alignment",
          feedback:
            "Excellent. You turn a broad architecture ambition into a scoped, decision-oriented first release.",
          stakeholderResponse:
            "Yes. That would make the architecture tangible and help management conversations improve."
        },
        {
          id: "6b",
          text: "Should we build the full semantic layer before involving the business?",
          score: 1,
          dimension: "cognitive_empathy",
          feedback:
            "This is risky. Building governance without business ownership often creates technically elegant but unused assets.",
          stakeholderResponse:
            "That is what I want to avoid. We need adoption, not just a platform."
        },
        {
          id: "6c",
          text: "Can we use AI to generate metric definitions automatically?",
          score: 2,
          dimension: "buildability",
          feedback:
            "AI might assist documentation, but it cannot resolve ownership, disagreement, or business meaning by itself.",
          stakeholderResponse:
            "Maybe as support, but the real issue is agreement and trust."
        }
      ]
    }
  ],
  resultBands: [
    {
      min: 26,
      max: 30,
      label: "Strategic Data Translator",
      feedback:
        "You translated technical architecture into decision value. You respected the technical problem while clarifying users, ownership, definitions, and management impact."
    },
    {
      min: 21,
      max: 25,
      label: "Governance-Oriented Analyst",
      feedback:
        "You connected architecture to business use well, though you sometimes stayed in technical solutioning before fully clarifying decision impact."
    },
    {
      min: 16,
      max: 20,
      label: "Practical Data Platform Partner",
      feedback:
        "You identified useful platform requirements, but sometimes let technical language drive the conversation. Keep asking which decision or workflow improves."
    },
    {
      min: 10,
      max: 15,
      label: "Architecture-First Builder",
      feedback:
        "You focused mainly on tooling, models, and governance mechanisms. A stronger Socratic analyst connects technical assets to concrete business decisions."
    },
    {
      min: 0,
      max: 9,
      label: "Jargon Passenger",
      feedback:
        "You followed the technical jargon instead of unpacking it. Respect the technical context, but always ask what decision, user, or adoption problem it serves."
    }
  ],
  decisionBlueprint: {
    originalRequest:
      "We should create a governed semantic layer with domain-aligned metrics, lineage, certified datasets, and AI-ready data products.",
    clarifiedNeed:
      "Morgan needs to reduce KPI definition conflicts in monthly performance review so leaders can make decisions instead of debating whose number is correct.",
    primaryDecision:
      "Which board-level KPI definitions should be standardized, who owns them, and where are governed local variants allowed?",
    user:
      "Technical Data Lead, domain owners, data stewards, and leaders participating in monthly performance review.",
    keySignals: [
      "KPI definition conflicts",
      "Reports using uncertified or unclear metrics",
      "Metrics without clear ownership",
      "Board-level KPIs with multiple competing definitions",
      "Operational variants without labels",
      "Lineage or trust issues that block adoption"
    ],
    actionCategories: [
      "Standardize",
      "Allow governed variant",
      "Assign owner",
      "Document lineage",
      "Escalate definition conflict"
    ],
    governancePrinciples: [
      "Business owns meaning; data team facilitates implementation",
      "Board-level KPIs need stable definitions",
      "Local variants are allowed when clearly labeled",
      "Certification should improve trust, not create shadow reporting",
      "Architecture is successful only when decision conversations improve"
    ],
    suggestedPurpose:
      "Create a scoped semantic layer for a small set of board-level KPIs used in monthly performance review, with clear definitions, domain ownership, lineage, certification, and governed variants.",
    betterDashboardTitle:
      "Certified management KPIs: definitions, ownership, and trusted use"
  }
};

export const scenarios: Scenario[] = [
  controlDashboardScenario,
  rileyHrPeopleDashboardScenario,
  morganSemanticLayerScenario,
];

export function getScenarioById(scenarioId: string): Scenario {
  const scenario = scenarios.find((item) => item.id === scenarioId);

  if (!scenario) {
    throw new Error(`Unknown scenario: ${scenarioId}`);
  }

  return scenario;
}
