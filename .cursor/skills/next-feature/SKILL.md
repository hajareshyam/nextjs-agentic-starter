# next-feature

## Use when
Adding or modifying user-facing Next.js functionality.

## Role contract
- Role: Frontend Developer
- Inputs: Approved requirements or plan, UX expectations, and constraints.
- Outputs: Updated UI/behavior, relevant tests, and implementation handoff notes.
- Out of scope: Backend/API redesign unless directly required by the feature.

## Workflow
1. Confirm requirements and success criteria.
2. Implement in `src/app` and `src/components` using TypeScript and clear server/client boundaries.
3. Keep changes focused; avoid unrelated refactors.
4. Enforce security basics: never hardcode secrets and validate external input at boundaries.
5. Add or update tests for changed behavior (unit/integration/e2e as needed).
6. Run typecheck and relevant tests; run lint when lint setup is functional in the environment.
7. Include coverage for changed files when available, or mark `n/a` with reason in handoff.
