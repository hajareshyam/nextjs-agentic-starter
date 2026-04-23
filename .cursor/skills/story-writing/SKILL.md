---
name: story-writing
description: Write concise product stories with clear scope, acceptance criteria, and implementation handoff context. Use when defining a new feature/request before planning and implementation.
---

# story-writing

## Use when
Defining a feature/request before `feature-planning` so requirements are clear and implementation-ready.

## Role contract
- Role: Product Story Writer
- Inputs: Feature/request summary, constraints, dependencies, and assumptions.
- Outputs: Structured story plus short handoff notes for `feature-planning`.
- Out of scope: Detailed technical design, implementation choices, and code changes.

## Context control
1. Keep output concise (prefer <= 250 words unless user asks for more).
2. Include only information needed for planning/implementation.
3. Avoid repeated background and avoid long narrative text.
4. Use bullet points and short Given/When/Then criteria.

## Context fork guidance
1. Use `context fork: true` for medium/large/risky requests, long/noisy threads, or multi-story discussions.
2. Skip context fork for small, single-change requests.
3. Use one fork per story to avoid mixing requirements across features.
4. In forked context, include only goal, constraints, dependencies, and confirmed decisions.

## Output format
1. Title
2. Role(s)
3. Objective
4. User story (`As a ... I want ... so that ...`)
5. In scope
6. Out of scope
7. Acceptance criteria (Given/When/Then)
8. Dependencies/constraints
9. Risks/assumptions
10. Handoff notes for `feature-planning`

## Workflow
1. Clarify the request in one sentence.
2. Draft the story in the output format above.
3. Ensure each acceptance criterion is testable.
4. End with a short handoff note for the next skill.
