# Development Workflow

## Branching
- Create feature branches from `main`
- Keep pull requests focused and small

## Local Checks
- Run lint and type checks before pushing
- Run relevant tests before opening a pull request
- Keep unit tests in `tests/unit` mirroring `src` structure
- Name test files as `<ComponentOrPage>.test.tsx` for UI test suites
- Run integration coverage with `npm run test:integration`
- Run browser e2e checks with `npm run test:e2e`

## Pull Requests
- Use the PR template
- Ensure CI passes before merge
