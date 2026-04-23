# api-route

## Use when
Creating or updating API endpoints in App Router.

## Workflow
1. Define request/response contract and validation.
2. Implement route logic in `src/app/api` using TypeScript and focused module boundaries.
3. Enforce security basics: validate all external input, never hardcode secrets, and use least-privilege credentials/tokens.
4. Add integration tests for success and failure paths; add unit tests for extracted `src/lib` utilities.
5. Add e2e coverage when the endpoint affects user-critical flows.
6. Document edge cases and status code behavior.
7. Before handoff, ensure typecheck and relevant tests pass; run lint when lint setup is functional in the environment.
8. Report coverage for changed files when available, or mark `n/a` with reason in handoff.
