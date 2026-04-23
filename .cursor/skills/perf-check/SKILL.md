# perf-check

## Use when
Profiling slow pages, API handlers, or rendering bottlenecks.

## Workflow
1. Reproduce and measure in production mode first (`npm run build` + `npm run start`) with cold and warm runs.
2. Use dev mode only for quick smoke checks, not for final performance decisions.
3. Identify root cause (compute, I/O, rendering, bundle size, network).
4. Apply the smallest focused optimization; avoid unrelated refactors.
5. Preserve behavior and security constraints (validation at boundaries, no secret exposure).
6. Add or update tests when behavior or contracts change.
7. Re-measure in the same production-mode setup and document before/after impact.
8. Run typecheck and relevant tests before handoff; run lint when lint setup is functional in the environment.
9. Report coverage command and changed-file coverage when behavior changes, or mark `n/a` with reason.
