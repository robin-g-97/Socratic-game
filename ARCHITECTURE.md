# The Socratic Analyst Architecture

This app is a small Next.js MVP for a scripted training game. The goal of the architecture is to keep the product easy to understand, easy to extend with more scenarios, and free from backend complexity until it is actually needed.

## Framework Choices

### Next.js

Next.js is the web application framework. It gives the app a standard project structure, production build tooling, routing, TypeScript support, and a local development server.

This MVP uses the `app` directory:

```txt
src/app
  layout.tsx
  page.tsx
  globals.css
```

`layout.tsx` defines the shared HTML shell and metadata.

`page.tsx` is the main interactive screen. Because the MVP is a single-flow prototype, there are no separate URL routes yet.

`globals.css` contains the visual design for the whole app.

### React

React is used for UI components and local state. The app is a scripted game, so local React state is enough for now.

There is no global state library because the state is simple:

- which screen the user is on
- which scenario is selected
- which answers have been selected

### TypeScript

TypeScript defines the shape of scenarios, personas, dialogue turns, answer options, scoring, and result data. This makes the content easier to extend safely.

The main types live in:

```txt
src/types/scenario.ts
```

## Main App Flow

The app flow is controlled in:

```txt
src/app/page.tsx
```

The current flow is:

```txt
LandingPage
  -> ModeSelection
  -> ScenarioSelection
  -> ScenarioIntro
  -> DialogueScreen
  -> ResultScreen
```

`page.tsx` owns the current step, selected scenario, selected persona, selected answers, and score summary.

This is intentionally simple. There is no router, database, login, or API layer yet.

## Data Model

The app separates persona metadata from scenario content.

### Personas

Personas live in:

```txt
src/data/personas.ts
```

A persona describes the stakeholder:

- name
- role
- data maturity
- context
- blind spot
- Socratic challenge
- learning goal
- what the player must uncover

This keeps stakeholder knowledge reusable across future scenarios.

### Scenarios

Scenarios live in:

```txt
src/data/scenarios.ts
```

A scenario contains the playable dialogue tree:

- scenario title
- linked `personaId`
- opening request
- learning goal
- dialogue turns
- answer options
- result bands
- decision blueprint

Each scenario points to a persona with `personaId`.

That means the app can show persona context and still keep the dialogue tree separate.

## Scoring

Scoring logic lives in:

```txt
src/lib/scoring.ts
```

The helper:

- sums selected answer scores
- totals points by dimension
- returns the matching result band

The UI does not calculate scoring directly. It asks the scoring helper for the result. This keeps the game rules in one place.

## Language Support

Interface translations live in:

```txt
src/lib/i18n.ts
```

The current app supports English and Dutch for UI labels, buttons, headings, helper text, and result-screen labels.

The active language is owned by `src/app/page.tsx` and passed down to the screen components as translated copy. This keeps the language switch simple and avoids introducing a full internationalization framework before the app needs routes, URLs, or persisted user preferences.

Scenario and persona content still lives in:

```txt
src/data/scenarios.ts
src/data/personas.ts
```

To fully translate the scripted dialogue later, add localized fields to the scenario/persona data or create locale-specific scenario files. The UI is already prepared to receive translated copy; the next step would be translating the actual training content.

## Components

Components live in:

```txt
src/components
```

Each component is responsible for one screen:

```txt
LandingPage.tsx        first screen and primary CTA
ModeSelection.tsx      Training Mode and disabled Challenge Mode
ScenarioSelection.tsx  available persona/scenario cards
ScenarioIntro.tsx      persona context and scenario briefing
DialogueScreen.tsx     playable dialogue turns
ResultScreen.tsx       score, feedback, blueprint, share text
```

The components receive data through props. They do not import or mutate global app state.

## Why This Shape

The app is structured around three principles:

1. Keep content separate from UI.
2. Keep business logic separate from rendering.
3. Keep state local until there is a real need for shared state or a backend.

This makes it straightforward to add a new scenario:

1. Add or reuse a persona in `src/data/personas.ts`.
2. Add a scenario object in `src/data/scenarios.ts`.
3. Add it to the exported `scenarios` array.

Once it is in the `scenarios` array with `status: "available"`, it appears in scenario selection and can be played.

## What Is Not Included Yet

The MVP intentionally does not include:

- authentication
- database persistence
- AI-generated dialogue
- analytics
- payments
- backend APIs
- Challenge Mode

Those can be added later when the product needs them.
