# AGENTS.md

## Purpose

This file defines the default working rules for Codex in this repository.

Codex should optimize for clarity, maintainability, and safe incremental progress. The goal is not to produce the most sophisticated solution, but the most reliable and understandable solution that solves the task.

---

## Core engineering principles

### 1. KISS: Keep It Simple

Prefer the simplest solution that solves the actual problem.

Avoid:

* clever abstractions
* unnecessary indirection
* premature architecture
* complex generic systems
* over-engineering

Before adding complexity, ask whether the same result can be achieved with clearer, smaller, more direct code.

---

### 2. DRY: Don't Repeat Yourself

Avoid meaningful duplication, especially in:

* business logic
* validation logic
* data transformations
* API calls
* formatting rules
* repeated UI patterns

However, do not abstract too early. Small duplication is acceptable when an abstraction would make the code harder to understand.

Create shared helpers, components, or utilities only when they improve clarity and reduce real maintenance risk.

---

### 3. YAGNI: You Aren't Gonna Need It

Do not build speculative features, abstractions, configuration, or extension points.

Only implement what is needed for the current task.

Avoid adding:

* unused configuration
* hypothetical future options
* generic plugin systems
* unnecessary interfaces
* extra settings
* unused parameters
* future-proofing without a concrete use case

### 4. GSD: Get Stuff Done

Prioritize forward progress and working outcomes.

Do not get stuck in endless planning, over-analysis, speculative refactoring, or unnecessary perfectionism. A small working improvement is better than a large unfinished redesign.

GSD does not mean rushing or ignoring quality. It means:
- solve the actual task
- keep the scope controlled
- make a concrete change
- validate the changed path
- report clearly what was done

Codex should prefer:
- a small working implementation over a grand architecture
- clear next steps over vague analysis
- useful delivery over theoretical completeness
- finishing the requested task over expanding the scope

Codex should avoid:
- unnecessary rewrites
- rabbit holes
- polishing unrelated code
- inventing future requirements
- stopping at advice when implementation is possible
---

## General coding rules

### 5. Prefer small, safe changes

Make the smallest change that correctly solves the task.

Avoid broad refactors unless explicitly requested. Do not touch unrelated files. Do not rewrite working code just because it could be cleaner.

When a refactor is useful, keep it narrow and explain why it is needed.

---

### 6. Preserve existing behavior

Do not change existing behavior unless the task explicitly requires it.

Be especially careful with:

* authentication
* permissions
* user data
* data persistence
* API contracts
* billing or payment logic
* existing workflows
* user-generated content

When behavior changes, clearly explain what changed and why.

---

### 7. Read before writing

Before modifying code, inspect the relevant files and understand the existing pattern.

Follow the current project conventions for:

* naming
* folder structure
* component structure
* styling
* state management
* error handling
* testing

Do not introduce a new pattern unless the existing pattern is clearly inadequate for the task.

---

### 8. Prioritize readability

Readable code is better than clever code.

Prefer:

* clear names
* simple control flow
* small functions
* explicit logic
* obvious data structures

Avoid:

* dense one-liners
* obscure language tricks
* unnecessary abstraction
* hidden side effects
* overly generic names

Optimize for the next developer who has to understand the code quickly.

---

### 9. Separate concerns

Keep different responsibilities reasonably separated.

Avoid components or functions that simultaneously handle:

* data fetching
* data transformation
* validation
* business rules
* rendering
* workflow state
* formatting

Extract helpers or smaller components when this improves clarity, but do not fragment the code unnecessarily.

---

### 10. Make state explicit

State should have a clear owner and a clear lifecycle.

Prefer:

* local state for local UI behavior
* derived values instead of duplicated state
* shared state only when multiple parts of the application truly need it

Avoid hidden, scattered, or duplicated state.

---

### 11. Validate inputs and assumptions

Do not trust external input.

Validate or guard data coming from:

* users
* APIs
* uploaded files
* environment variables
* AI/model responses
* third-party services

When assumptions are necessary, make them visible in code, comments, or the final explanation.

---

### 12. No silent failures

Do not hide errors with empty `catch` blocks, vague fallbacks, or swallowed promises.

Errors should be handled deliberately.

Prefer:

* useful user-facing messages
* safe fallback behavior
* relevant debugging context
* explicit failure states

Avoid:

* `catch { }`
* returning `null` without explanation
* masking broken API responses
* pretending an operation succeeded when it failed

---

### 13. Comments explain why, not what

Use comments to explain intent, constraints, tradeoffs, or non-obvious decisions.

Do not add comments that merely repeat the code.

Good comment:

```ts
// Keep this client-side because the uploaded report image should not leave the browser.
```

Bad comment:

```ts
// Set loading to true
setLoading(true)
```

---

### 14. Dependencies need justification

Do not add new dependencies unless clearly necessary.

Before adding a package, consider:

* whether the project already has a solution
* whether native platform APIs are sufficient
* bundle size
* security risk
* maintenance risk
* long-term ownership

If a dependency is added, explain why it is justified.

---

## Frontend and UX rules

### 15. Respect the existing design language

Use existing components, spacing, styling conventions, and UI patterns.

Do not introduce a new visual style unless explicitly requested.

Prefer:

* existing shared components
* consistent copy
* consistent spacing
* predictable interaction patterns

Avoid:

* one-off styling
* inconsistent terminology
* unnecessary visual complexity
* redesigning unrelated parts of the interface

---

### 16. Design for clarity and trust

The product should help users understand what is happening and what they should do next.

Prioritize:

* clear labels
* useful empty states
* transparent loading states
* understandable error messages
* visible assumptions
* explainable outputs

Do not add features that make the interface feel more powerful but less understandable.

---

### 17. Product-specific rule: decision support first

This product supports decision-making.

Prioritize clarity, explainability, and user trust over feature richness. The interface should make the user's next decision clearer, not merely present more information.

When working on analysis, feedback, dashboards, or reports, Codex should ask:

* What decision does this support?
* Is the output understandable?
* Are assumptions visible?
* Is the user guided toward a useful next step?
* Does this reduce or increase cognitive load?

---

## Workflow for Codex

### Before editing

Codex should first:

1. Inspect the relevant files.
2. Identify the current implementation pattern.
3. Determine the smallest safe change.
4. Note any assumptions or risks.

Do not start editing before understanding the surrounding code.

---

### While editing

Codex should:

1. Make minimal, focused changes.
2. Reuse existing utilities, components, and patterns.
3. Avoid speculative abstractions.
4. Avoid unrelated cleanup.
5. Keep naming and formatting consistent.
6. Handle errors deliberately.
7. Preserve existing behavior unless change is required.

---

### Before finishing

Codex should validate the changed path.

Run the most relevant available checks, such as:

* lint
* typecheck
* tests
* build

If checks cannot be run, explain why.

---

## Final response format

After completing a task, Codex should report:

1. What changed.
2. Which files changed.
3. How the change was validated.
4. Any remaining risks, assumptions, or follow-up work.

Keep the final explanation concise and concrete.

---

## Default priority order

When rules conflict, use this priority order:

1. User request
2. Safety and correctness
3. Existing project conventions
4. Simplicity
5. Maintainability
6. Performance
7. Aesthetic preference

Do not sacrifice correctness for elegance.
Do not sacrifice clarity for cleverness.
Do not sacrifice maintainability for speed unless explicitly instructed.
