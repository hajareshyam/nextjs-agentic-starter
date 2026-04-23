# AGENTS

## Purpose
Define how coding agents operate in this repository with predictable, safe output.

## Core Rules
- Prefer small, focused changes.
- Keep tests and docs aligned with behavior changes.
- Avoid destructive git commands unless explicitly requested.
- Do not commit secrets or environment credentials.

## Delivery Expectations
- Ensure quality gates pass for touched areas using canonical commands:
  - `npm run typecheck`
  - `npm run test`
  - `npm run test:e2e` when user-critical flows are changed
  - `npm run lint` when lint setup is functional in the environment
- Define touched areas by change type:
  - UI/component changes: unit tests and relevant integration/e2e checks
  - API route changes: integration tests for success/failure/validation/auth paths
  - Shared logic in `src/lib`: unit tests for edge cases and regression risks
- Report coverage for changed files when available, or mark `n/a` with reason.
- Use production-mode measurements (`npm run build` + `npm run start`) for performance decisions.
- Include concise implementation notes in pull requests.
