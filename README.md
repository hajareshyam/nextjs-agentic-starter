# Next.js Agentic Starter

Production-ready Next.js starter with TypeScript, strong testing defaults, and an agent-first delivery workflow.

## Available Features
- Next.js App Router foundation with TypeScript-first modules.
- Built-in quality gates: lint, typecheck, unit, integration, and e2e tests.
- Documentation set for architecture, dev workflow, troubleshooting, and releases.
- Agent operating contract in `AGENTS.md` for safe, predictable coding changes.
- Project-local Cursor skills in `.cursor/skills` for story -> plan -> implement -> QA flow.

## Run the Application
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production assets: `npm run build`
- Start production server: `npm run start`

## Quality Checks
- Lint: `npm run lint`
- Type check: `npm run typecheck`
- Unit tests: `npm run test`
- Integration tests: `npm run test:integration`
- E2E tests: `npm run test:e2e`

## Agentic Workflow (Recommended)
1. `story-writing` -> define concise, testable product story.
2. `feature-planning` -> produce scope, acceptance criteria, risks, and file plan.
3. `implementation-execution` -> implement approved plan with focused diffs.
4. `qa-validation` -> verify acceptance criteria, regressions, and merge readiness.

For small low-risk fixes, use:
- `implementation-execution` -> `qa-validation`

## Available Agents and Skills

### Core Delivery Agents
- `story-writing` (Product Story Writer): shapes implementation-ready stories.
- `feature-planning` (Feature Planner): scopes work and defines test strategy.
- `implementation-execution` (Developer): implements approved plan safely.
- `qa-validation` (QA Engineer): validates behavior, risks, and release readiness.

### Specialized Implementation Skills
- `next-feature` (Frontend Developer): user-facing Next.js features in `src/app` and `src/components`.
- `api-route` (API Developer): robust App Router API endpoints with validation and tests.
- `test-coverage` (Test Engineer): focused unit/integration/e2e coverage for changed behavior.
- `perf-check` (Performance Engineer): production-mode performance baselines and measured optimization.

## Skill-to-Task Quick Guide
- New feature request: `story-writing` -> `feature-planning` -> `implementation-execution` -> `qa-validation`
- API contract or route change: add `api-route` during implementation.
- Risky regression-prone change: add `test-coverage` before QA handoff.
- Slow route/page investigation: run `perf-check` with production-mode measurements.

## Project Docs
- Architecture: `docs/architecture.md`
- Development workflow: `docs/development-workflow.md`
- Troubleshooting: `docs/troubleshooting.md`
- Release process: `docs/release-process.md`
- Agent contract: `AGENTS.md`
- Project skill docs: `.cursor/skills/README.md`

## AI Tooling Notes
- `.cursor/` contains Cursor-native rules and skills. Keep it if you use Cursor workflows.
- Shared docs like `AGENTS.md` and `README.md` are the main cross-tool references.
