# Project Skills

These project-local skills standardize repeatable delivery patterns.

- `next-feature`: implement product features in app router architecture
- `api-route`: create robust API routes with validation and tests
- `test-coverage`: expand tests and prevent regressions
- `perf-check`: investigate and improve runtime bottlenecks (production-mode first)
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
Run typecheck and relevant tests before handoff; run lint when lint setup is functional.
Report:
- files changed
- key implementation decisions
- any follow-up items
```

`api-route`
```text
Use the api-route skill.
Task: <describe the API route to add/update>
If integrating an external provider, verify latest docs before implementation:
- endpoint URL, method, headers, auth
- request/response schema
- rate limits and error codes
Implement route in src/app/api with validation and focused module boundaries.
Run typecheck and relevant tests before handoff; run lint when lint setup is functional.
Report:
- API contract and status codes
- test coverage added (integration + any src/lib unit tests)
- doc URL(s) used for external API verification
```

`qa-validation`
```text
Use the qa-validation skill.
Validate the completed implementation for: <task>.
Check acceptance criteria, edge cases, and regressions.
Run typecheck and relevant tests; run lint when lint setup is functional.
Report:
- blocking issues (if any)
- non-blocking improvements
- merge readiness verdict
```

`perf-check`
```text
Use the perf-check skill.
Target: <page/route/interaction>
Run baseline in production mode (npm run build && npm run start).
Capture cold and warm metrics, identify root cause, and apply only focused optimization.
Re-measure in the same production setup and report before/after.
Use dev mode only as a quick smoke signal.
```

## Workflow Diagram

```mermaid
flowchart TD
    A[Start Task] --> B{Task size/risk?}

    B -->|Small bug, low risk| C[implementation-execution]
    B -->|Medium/Large feature| D[feature-planning]
    B -->|Risky refactor / API contract change| D

    D --> E[Planning Handoff]
    E --> C

    C --> F{API integration involved?}
    F -->|Yes| G[api-route<br/>contract + validation + docs verification]
    F -->|No| H[Continue implementation]

    G --> H
    H --> I[Implementation Handoff]

    I --> J[qa-validation]
    J --> K{Checks pass?}

    K -->|No| L[Blockers / fixes required]
    L --> C

    K -->|Yes| M[QA Handoff]
    M --> N[Reviewer / PR merge decision]
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
- coverage command: <command used or n/a>
- changed files coverage: <percent or n/a>
- critical paths covered: <yes/no + note>

Risks / Follow-ups:
- <item>

Next owner:
- <implementation-execution|qa-validation|reviewer>
```
