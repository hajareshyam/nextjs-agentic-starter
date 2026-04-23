# implementation-execution

## Use when
Implementing an approved plan with focused code changes and project standards.

## Workflow
1. Confirm approved scope and current step to execute.
2. Implement the smallest viable change in the correct module boundaries.
3. Enforce security and validation at input boundaries.
4. Keep diffs focused; avoid unrelated refactors.
5. Update docs/config only when behavior or setup changes.
6. Run typecheck and relevant tests before handoff; run lint when lint setup is functional in the environment.
7. Include coverage for changed files when available, or mark `n/a` with reason in handoff.
