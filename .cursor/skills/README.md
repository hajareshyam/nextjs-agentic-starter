# Project Skills

These project-local skills standardize repeatable delivery patterns.

- `next-feature`: implement product features in app router architecture
- `api-route`: create robust API routes with validation and tests
- `test-coverage`: expand tests and prevent regressions
- `perf-check`: investigate and improve runtime bottlenecks (production-mode first)
- `story-writing`: create concise, implementation-ready stories before planning
- `feature-planning`: define scope, acceptance criteria, risks, and test strategy before coding
- `implementation-execution`: implement approved plans with focused, standards-aligned changes
- `qa-validation`: verify behavior, run quality gates, and report merge readiness

## Skill Role Mapping

- `story-writing` -> Product Story Writer
- `feature-planning` -> Feature Planner
- `implementation-execution` -> Developer
- `next-feature` -> Frontend Developer
- `api-route` -> API Developer
- `test-coverage` -> Test Engineer
- `qa-validation` -> QA Engineer
- `perf-check` -> Performance Engineer

## Default Agent Order

Assumption: BA/Product provides stories before engineering starts.

1. `feature-planning`
2. `implementation-execution`
3. `qa-validation`

Optional pre-step:
- `story-writing` (only when stories/acceptance criteria are missing or unclear)

## Rule of Thumb

- Small bug fix (single-file or low-risk): `implementation-execution` -> `qa-validation`
- BA-ready medium/large feature: `feature-planning` -> `implementation-execution` -> `qa-validation`
- Missing/unclear story: `story-writing` -> `feature-planning` -> `implementation-execution` -> `qa-validation`
- Risky refactor or API contract change: include `feature-planning` and `qa-validation`; add `story-writing` only when needed

## Copy-Paste Prompts

`story-writing`
```text
Use the story-writing skill.
Task: <describe the feature/request>
Keep output concise and implementation-ready.
Include:
- title and roles
- objective and user story
- in-scope and out-of-scope
- testable acceptance criteria (Given/When/Then)
- dependencies, risks, and assumptions
- short handoff note for feature-planning
```

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

## Example Prompts By Skill

`story-writing` example
```text
Use the story-writing skill.
Task: Add profile photo upload for signed-in users.
Keep output concise and implementation-ready.
Include:
- title and roles
- objective and user story
- in-scope and out-of-scope
- testable acceptance criteria (Given/When/Then)
- dependencies, risks, and assumptions
- short handoff note for feature-planning
```

`feature-planning` example
```text
Use the feature-planning skill.
Task: Add profile photo upload on the user profile page.
Constraints: max file size 3MB, JPG/PNG only, no third-party storage in v1.
Output:
- scope and non-goals
- acceptance criteria
- file-by-file implementation plan
- risks and rollback plan
- test strategy (unit/integration/e2e)
Do not implement yet.
```

`implementation-execution` example
```text
Use the implementation-execution skill.
Implement the approved plan for: profile photo upload on /profile.
Follow project standards and keep changes focused.
Run typecheck and relevant tests before handoff; run lint when lint setup is functional.
Report:
- files changed
- key implementation decisions
- any follow-up items
```

`api-route` example
```text
Use the api-route skill.
Task: Add POST /api/profile/avatar to upload and validate profile photo metadata.
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

`qa-validation` example
```text
Use the qa-validation skill.
Validate the completed implementation for: profile photo upload feature.
Check acceptance criteria, edge cases, and regressions.
Run typecheck and relevant tests; run lint when lint setup is functional.
Report:
- blocking issues (if any)
- non-blocking improvements
- merge readiness verdict
```

`perf-check` example
```text
Use the perf-check skill.
Target: /profile page initial load and avatar upload interaction.
Run baseline in production mode (npm run build && npm run start).
Capture cold and warm metrics, identify root cause, and apply only focused optimization.
Re-measure in the same production setup and report before/after.
Use dev mode only as a quick smoke signal.
```

`test-coverage` example
```text
Use the test-coverage skill.
Task: Increase confidence for profile avatar upload changes.
Add unit tests for src/lib validation utilities, integration tests for API success/failure paths,
and e2e coverage for the user-critical upload flow.
Report coverage command and changed-file coverage, or mark n/a with reason.
```

`next-feature` example
```text
Use the next-feature skill.
Task: Add a profile preferences panel with theme and notification toggles.
Implement in src/app and src/components with clear server/client boundaries.
Keep changes focused, update tests for changed behavior, and hand off with decisions and risks.
```

## Workflow Diagram

```mermaid
flowchart TD
    A[Start Task] --> B{Task size/risk?}

    B -->|Small bug, low risk| C[implementation-execution]
    B -->|BA-ready medium/large feature| F[feature-planning]
    B -->|Story unclear or missing| D[story-writing]
    B -->|Risky refactor / API contract change| F

    D --> E[Story Handoff]
    E --> F
    F --> G[Planning Handoff]
    G --> C

    C --> H{API integration involved?}
    H -->|Yes| I[api-route<br/>contract + validation + docs verification]
    H -->|No| J[Continue implementation]

    I --> J
    J --> K[Implementation Handoff]

    K --> L[qa-validation]
    L --> M{Checks pass?}

    M -->|No| N[Blockers / fixes required]
    N --> C

    M -->|Yes| O[QA Handoff]
    O --> P[Reviewer / PR merge decision]
```

## Handoff Protocol

Use a handoff at each transition:

- `story-writing` -> `feature-planning`
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
