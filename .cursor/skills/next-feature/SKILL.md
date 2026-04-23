# next-feature

## Use when
Adding or modifying user-facing Next.js functionality.

## Workflow
1. Confirm requirements and success criteria.
2. Implement in `src/app` and `src/components` using TypeScript and clear server/client boundaries.
3. Keep changes focused; avoid unrelated refactors.
4. Enforce security basics: never hardcode secrets and validate external input at boundaries.
5. Add or update tests for changed behavior (unit/integration/e2e as needed).
6. Run lint, typecheck, and relevant tests before handoff.
