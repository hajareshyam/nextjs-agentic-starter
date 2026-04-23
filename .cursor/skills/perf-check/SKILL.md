# perf-check

## Use when
Profiling slow pages, API handlers, or rendering bottlenecks.

## Workflow
1. Reproduce and measure the performance issue.
2. Identify root cause (compute, I/O, rendering, bundle size).
3. Apply the smallest focused optimization; avoid unrelated refactors.
4. Preserve behavior and security constraints (validation at boundaries, no secret exposure).
5. Add or update tests when behavior or contracts change.
6. Re-measure and document before/after impact.
7. Run lint, typecheck, and relevant tests before handoff.
