# Architecture

## Target
Single Next.js application repository using npm, with clear boundaries in `src/`.

## Layers
- `src/app`: Next.js App Router pages and layouts
- `src/components`: reusable UI components
- `src/lib`: shared utilities and service helpers
- `src/hooks`: React hooks
- `src/types`: shared TypeScript types

## Quality Baseline
- Linting + formatting + type checking
- Unit/integration tests plus e2e placeholders
- CI gates for pull requests
