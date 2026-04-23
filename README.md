# Next.js Boilerplate

Production-ready Next.js starter with TypeScript, testing, and developer workflow guardrails.

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

## Project Docs
- Architecture: `docs/architecture.md`
- Development workflow: `docs/development-workflow.md`

## AI Tooling Notes
- `.cursor/` contains Cursor-native rules and skills. Keep it if you use Cursor workflows.
- Claude/Copilot can read these files as regular docs when referenced, but they do not natively execute Cursor rules/skills the same way Cursor does.
- Shared docs like `AGENTS.md` and this `README.md` are the primary cross-tool references for Claude/Copilot/Cursor.
