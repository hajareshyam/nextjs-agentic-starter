# Project Skills

These project-local skills standardize repeatable delivery patterns.

- `next-feature`: implement product features in app router architecture
- `api-route`: create robust API routes with validation and tests
- `test-coverage`: expand tests and prevent regressions
- `perf-check`: investigate and improve runtime bottlenecks
- `feature-planning`: define scope, acceptance criteria, risks, and test strategy before coding
- `implementation-execution`: implement approved plans with focused, standards-aligned changes
- `qa-validation`: verify behavior, run quality gates, and report merge readiness

## Default Agent Order

1. `feature-planning`
2. `implementation-execution`
3. `qa-validation`

## Rule of Thumb

- Small bug fix (single-file or low-risk): `implementation-execution` -> `qa-validation`
- Medium/large feature: `feature-planning` -> `implementation-execution` -> `qa-validation`
- Risky refactor or API contract change: always run all three in order

## Copy-Paste Prompts

`feature-planning`
```text
Use the feature-planning skill.
Task: <describe the feature or change>
Constraints: <technical, product, or timeline constraints>
Output:
- scope and non-goals
- acceptance criteria
- file-by-file implementation plan
- risks and rollback plan
- test strategy (unit/integration/e2e)
Do not implement yet.
```

`implementation-execution`
```text
Use the implementation-execution skill.
Implement the approved plan for: <task>.
Follow project standards and keep changes focused.
Run lint, typecheck, and relevant tests before handoff.
Report:
- files changed
- key implementation decisions
- any follow-up items
```

`qa-validation`
```text
Use the qa-validation skill.
Validate the completed implementation for: <task>.
Check acceptance criteria, edge cases, and regressions.
Run lint, typecheck, and relevant tests.
Report:
- blocking issues (if any)
- non-blocking improvements
- merge readiness verdict
```

## Handoff Protocol

Use a handoff at each transition:

- `feature-planning` -> `implementation-execution`
- `implementation-execution` -> `qa-validation`
- `qa-validation` -> reviewer/PR merge decision

Copy-paste handoff block:
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

Risks / Follow-ups:
- <item>

Next owner:
- <implementation-execution|qa-validation|reviewer>
```
