# api-route

## Use when
Creating or updating API endpoints in App Router.

## Role contract
- Role: API Developer
- Inputs: API requirements, request/response contract, auth rules, and integration dependencies.
- Outputs: Route implementation, documented behavior/status codes, and test coverage evidence.
- Out of scope: Frontend UI implementation unless needed only for endpoint verification.

## Workflow
1. Define request/response contract and validation.
2. Implement route logic in `src/app/api` using TypeScript and focused module boundaries.
3. Enforce security basics: validate all external input, never hardcode secrets, and use least-privilege credentials/tokens.
4. Add integration tests for success and failure paths; add unit tests for extracted `src/lib` utilities.
5. Add e2e coverage when the endpoint affects user-critical flows.
6. Document edge cases and status code behavior.
7. Before handoff, ensure typecheck and relevant tests pass; run lint when lint setup is functional in the environment.
8. Report coverage for changed files when available, or mark `n/a` with reason in handoff.
9. For external API integrations, verify latest provider docs (endpoint URL, method, headers, auth, payload, response schema, rate limits, and error codes) before implementation and cite doc URL(s) in handoff.
