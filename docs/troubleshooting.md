# Troubleshooting

## Common Issues
- **Node version mismatch**
  - Symptom: install/build errors after pulling latest changes.
  - Fix: use project Node version (`nvm use`), then reinstall dependencies.

- **Dependency or lockfile drift**
  - Symptom: `npm install` fails or local behavior differs from CI.
  - Fix:
    1. remove `node_modules`
    2. run `npm install`
    3. re-run checks (`npm run typecheck`, `npm run test`, `npm run test:e2e`)

- **Lint command fails unexpectedly**
  - Symptom: lint exits with project-directory/config errors.
  - Fix: run `npm run typecheck` and tests first; if lint tooling is environment-specific, document the failure in PR/handoff and continue with passing quality gates.

- **Typecheck failures**
  - Symptom: `npm run typecheck` reports TS errors in changed modules.
  - Fix: resolve strict typing issues at boundaries (nullable values, API payload types, imports/aliases), then re-run typecheck.

- **Integration or e2e failures**
  - Symptom: tests pass locally in dev flow but fail in end-to-end flow.
  - Fix:
    1. verify server starts cleanly
    2. run failing test file directly
    3. inspect `test-results/` artifacts and error context
    4. re-run after fix

- **Coverage report missing or unexpected percentages**
  - Symptom: `npm run test:coverage` fails or shows 0% for app code.
  - Fix:
    1. confirm `@vitest/coverage-v8` is installed
    2. run `npm run test:coverage` and check the **`All files`** row
    3. open `coverage/index.html` for per-file detail
    4. for `src/lib` changes, run `npm run test:coverage:changed`

- **Pipeline phase blocked at approval gate**
  - Symptom: agent stops after planning or implementation without continuing.
  - Fix: reply with explicit approval (`Proceed to implementation-execution` or `Proceed to qa-validation`). `delivery-pipeline` runs one phase per turn by design.

- **Branch drift (`dev` vs `main`)**
  - Symptom: unexpected conflicts or failing checks during promotion PR.
  - Fix: rebase/merge latest `dev` into feature branch before opening PR; for release, verify `dev` is stable before `dev` -> `main`.

## Escalation
If unresolved:
1. Capture command output and relevant logs/screenshots.
2. Include failing command, branch, and commit SHA.
3. Open an issue using the bug template with reproduction steps and expected vs actual behavior.
