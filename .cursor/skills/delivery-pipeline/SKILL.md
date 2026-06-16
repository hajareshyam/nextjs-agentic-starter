---
name: delivery-pipeline
description: Route tasks through feature-planning, implementation, and QA skills one phase at a time. Use for multi-step feature work, bug fixes with quality gates, or when the user asks to run the delivery pipeline or coordinate plan → implement → QA.
---

# delivery-pipeline

## Use when
Starting any non-trivial task that should follow the project delivery pipeline, or when the user asks to run the pipeline, run phases, or coordinate plan → implement → QA.

## Role contract
- Role: Delivery pipeline lead
- Inputs: User task, constraints, current repo context, prior phase handoffs
- Outputs: Pipeline plan, active phase skill, phase summary, handoff block, approval checkpoint
- Out of scope: Writing production code during feature-planning phases; skipping approval gates; marking merge-ready before `qa-validation` passes; `story-writing` (not part of this flow — use [`story-writing`](../story-writing/SKILL.md) directly if needed)

## Entry prompt

```text
Use the delivery-pipeline skill.
Task: <describe request>
Constraints: <optional>
Start at the correct phase, run one phase only, then stop for my approval.
```

## Triage rules

Classify the task and pick the **starting skill** and **full pipeline**:

| Situation | Pipeline |
|---|---|
| Medium/large feature or unclear scope | `feature-planning` → `implementation-execution` → `qa-validation` |
| Small single-file or low-risk bug | `implementation-execution` → `qa-validation` |
| Risky refactor or API contract change | `feature-planning` → `implementation-execution` → `qa-validation` |
| Performance target (slow page, interaction, build) | `perf-check` → (optional `implementation-execution` if fixes needed) → `qa-validation` |
| i18n / locale (next-intl, `messages/{locale}`) | `feature-planning` → `implementation-execution` → `qa-validation` — prerequisite: centralized copy in `src/lib/forms/*` and `src/lib/auth/*-messages.ts` (see [`README.md`](../README.md) i18n prompts) |

If acceptance criteria are missing, **`feature-planning`** must define scope, non-goals, and testable criteria before implementation — do not add a separate story phase.

**Specialist skills during implementation** (use alongside or within `implementation-execution`):

- API route or external provider integration → read and follow [`api-route`](../api-route/SKILL.md)
- UI-heavy App Router work → read and follow [`next-feature`](../next-feature/SKILL.md)
- Low test confidence after implementation → add [`test-coverage`](../test-coverage/SKILL.md) before `qa-validation`

## Phase gate policy

1. Run **exactly one phase skill per turn** unless the user explicitly says to continue (e.g. "proceed", "continue to next phase", "go to planning").
2. At the start of each phase, **read** the target skill file under `.cursor/skills/<name>/SKILL.md` and follow it fully.
3. Do **not** start `implementation-execution` until `feature-planning` is explicitly approved (when planning was in the pipeline).
4. Do **not** mark merge-ready until `qa-validation` completes with a pass verdict.
5. After each phase, output in order:
   - **Phase summary** (what was done, current pipeline position)
   - **Handoff block** (template below)
   - **Approval question**: `Proceed to <next-skill>?` (or `Ready for pull-request?` after QA passes — user must ask to open the PR)

If the user rejects or revises at a gate, re-run the **same** phase skill with their feedback; do not advance.

## Execution protocol

1. **Triage** — state task type, chosen pipeline, and starting skill.
2. **Run one phase** — delegate to that skill's workflow; do not implement code during planning phases.
3. **Hand off** — fill the handoff block; ask for approval.
4. **On approval** — advance to the next skill in the pipeline; repeat until QA completes or user stops.

**Context to carry forward** (keep lean):
- Task name and objective
- Constraints and non-goals
- Acceptance criteria
- Decisions made and why
- Files touched or planned
- Open risks and follow-ups

**Context fork** — for medium/large or noisy threads, recommend a context fork per task before `feature-planning`.

**Quality gates** (from [`AGENTS.md`](../../../AGENTS.md) at repository root):
- `npm run typecheck`
- `npm run test`
- `npm run test:coverage` or `npm run test:coverage:changed` when `src/lib` changes
- `npm run test:e2e` when user-critical flows change
- `npm run lint` when lint setup is functional in the environment

Report check results in every implementation and QA handoff, including:
- **coverage command:** `npm run test:coverage` or `npm run test:coverage:changed`
- **changed files coverage:** output of `npm run test:coverage:changed` (or summary from `coverage/coverage-summary.json`)

## Pipeline reference

Skills used by this flow live in `.cursor/skills/`:

- [`feature-planning`](../feature-planning/SKILL.md)
- [`implementation-execution`](../implementation-execution/SKILL.md)
- [`next-feature`](../next-feature/SKILL.md)
- [`api-route`](../api-route/SKILL.md)
- [`test-coverage`](../test-coverage/SKILL.md)
- [`qa-validation`](../qa-validation/SKILL.md)
- [`pull-request`](../pull-request/SKILL.md)
- [`perf-check`](../perf-check/SKILL.md)

See [`README.md`](../README.md) for copy-paste prompts per skill.

## Standard handoff block

Use at the end of every phase:

```text
Handoff: <planning|implementation|qa>
Task: <feature/bug name>

Completed:
- <what was done>

Files:
- <path1>
- <path2>

Decisions:
- <decision + why>

Checks:
- lint: <pass/fail>
- typecheck: <pass/fail>
- tests: <pass/fail + scope>
- coverage command: <command used or n/a>
- changed files coverage: <percent or n/a>
- critical paths covered: <yes/no + note>

Risks / Follow-ups:
- <item>

Next owner:
- <implementation-execution|qa-validation|pull-request|reviewer>
```

Set `Handoff:` to `planning` after `feature-planning`; `implementation` after `implementation-execution` (and specialists); `qa` after `qa-validation`. After QA pass, suggest `pull-request` when the user wants a GitHub PR opened — do not run `pull-request` inside the same turn unless they ask.

## Verification scenarios

Use these to confirm delivery-pipeline behavior:

1. **Small bug** — pipeline should skip planning; stop after implementation, then after QA; each stop includes handoff + approval question.
2. **New feature** — stop after planning, after implementation, after QA.
