# test-coverage

## Use when
Increasing confidence in changed modules.

## Workflow
1. Identify behavior changes and risk areas.
2. Add unit tests for utility logic in `src/lib` and other changed logic paths.
3. Add integration tests for route behavior where relevant (success, failure, and validation paths).
4. Add e2e tests for user-critical flows impacted by the change.
5. Keep tests deterministic and focused on observable behavior.
6. Ensure lint, typecheck, and relevant test jobs pass before merge.
