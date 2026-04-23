# qa-validation

## Use when
Validating completed implementation work before merge.

## Workflow
1. Verify behavior against acceptance criteria and non-goals.
2. Add or improve tests for changed paths and critical edge cases.
3. Run typecheck and all relevant test suites; run lint when lint setup is functional in the environment.
4. Check for regressions in adjacent user flows and API contracts.
5. Report findings by severity with concrete reproduction details.
6. Report coverage command and changed-file coverage, or mark `n/a` with reason.
7. Confirm merge readiness or list blocking fixes.
