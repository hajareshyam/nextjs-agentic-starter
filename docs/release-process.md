# Release Process

## Versioning
- Use semantic versioning conventions for release notes.

## Branch Strategy
- `dev` is the integration/stabilization branch for upcoming releases.
- `main` is production-ready and release-tagged.
- Feature delivery flows through `feature/*` or `feat/*` -> `dev`.
- Release promotion flows through `dev` -> `main`.

## Pre-Release on `dev`
1. Ensure all planned features for the release are merged into `dev`.
2. Confirm CI passes on `dev` (typecheck, tests, and relevant quality gates).
3. Run final regression checks for user-critical flows.
4. Confirm release notes/changelog draft is ready.

## Release Checklist
1. Open and merge promotion PR: `dev` -> `main`.
2. Ensure CI is green on `main`.
3. Confirm changelog and release docs are updated.
4. Create release tag (for example: `v1.2.0`).
5. Publish GitHub release notes linked to the tag.

## Post-Release
1. Verify production deployment health and smoke-test key flows.
2. If urgent issues appear, patch from `main` using `hotfix/*` branch and merge back to `main` and `dev`.
