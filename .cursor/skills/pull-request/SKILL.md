---
name: pull-request
description: >-
  Open a GitHub pull request with a structured title and body from branch
  changes and QA handoff. Use when the user asks to create/open a PR, prepare
  for review, or after qa-validation when merge-ready.
---

# pull-request

## Use when

- User asks to create, open, or update a pull request
- Work is merge-ready after `qa-validation` (or user explicitly requests a PR)
- User says "open PR", "create PR", "prepare PR description"

## Role contract

- **Role:** Release / PR author
- **Inputs:** Current branch, diff vs base branch, commit history, latest QA handoff (if any)
- **Outputs:** PR title, full body, `gh pr create` (or update) command result with PR URL
- **Out of scope:** Force-push, rewriting history, merging without approval, splitting work (use `split-to-prs` first if needed)

## Prerequisites

1. Changes are committed (or user explicitly wants PR from current commits only).
2. QA handoff exists or you run a quick sanity check: `npm run typecheck`, `npm run test`, and `npm run test:e2e` when user-critical flows changed.
3. Do **not** push or open a PR until the user asked for it (user rule).

## Workflow

### 0. Resolve the base branch (required — never assume `main`)

Do **not** hardcode `main`, `master`, or any branch name. Discover the merge target every time.

**Preferred (GitHub remote configured):**

```bash
BASE="$(gh repo view --json defaultBranchRef --jq '.defaultBranchRef.name')"
```

**Fallbacks** (if `gh` fails or repo is not on GitHub):

```bash
# origin’s default branch (e.g. origin/main)
BASE="$(git symbolic-ref --short refs/remotes/origin/HEAD 2>/dev/null | sed 's|^origin/||')"

# or
BASE="$(git remote show origin 2>/dev/null | sed -n 's/.*HEAD branch: //p')"
```

If multiple remotes exist, prefer `origin`. If detection still fails, ask the user — do not guess `main`.

Use `$BASE` for all diffs and `gh pr create --base "$BASE"`. If the user names a different base explicitly, use that instead.

### 1. Gather context (parallel)

After `BASE` is set:

```bash
git status
git diff
git branch -vv
git log --oneline -15
git log "${BASE}"..HEAD --oneline
git diff "${BASE}"...HEAD
```

Identify:

- **Base branch:** value of `$BASE` (state it in the PR body or handoff)
- **All commits** on the branch (not only the latest)
- **User-facing outcome** (what reviewers need to understand)

### 2. Draft the title

Format: **imperative, concise, scoped**

- Good: `fix(checkout): load success order from API only`
- Good: `feat(i18n): add next-intl with en and hi catalogs`
- Avoid: `Updates`, `WIP`, `Fix stuff`, past tense (`Fixed bug`)

Use a conventional prefix when it fits the change: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.

### 3. Draft the body (required sections)

Use this template. Every section must be present; use `n/a` only when truly not applicable.

```markdown
## Summary

- <1–3 bullets: what changed and why, user-visible impact>

## What changed

- <bullet per major area: API, UI, lib, tests, i18n, etc.>

## Test plan

- [ ] <concrete step a reviewer can run>
- [ ] <e.g. npm run typecheck>
- [ ] <e.g. npm run test>
- [ ] <e.g. npm run test:e2e — when checkout/auth/orders touched>

## Quality gates

| Check | Result |
|-------|--------|
| typecheck | pass / fail |
| unit/integration tests | pass / fail (+ count if known) |
| e2e | pass / fail / n/a |
| lint | pass / fail / n/a (note pre-existing if unrelated) |
| coverage | command + changed-files summary or n/a |

## Risks / follow-ups

- <known risk, WC timing, env vars, follow-up PR>

## Screenshots / recordings

<optional — UI changes only>
```

**Map from QA handoff** when available:

| Handoff field | PR section |
|---------------|------------|
| Completed | Summary, What changed |
| Files | What changed (grouped, not a raw dump) |
| Decisions | Summary or What changed |
| Checks | Quality gates table |
| Risks / Follow-ups | Risks / follow-ups |

### 4. Push and create (sequential)

Only after user requested PR creation and `$BASE` is resolved:

```bash
git push -u origin HEAD
gh pr create --base "$BASE" --title "..." --body "$(cat <<'EOF'
<body here>
EOF
)"
```

If a PR already exists for the branch:

```bash
gh pr view --json url,number,title
gh pr edit <number> --title "..." --body "$(cat <<'EOF'
...
EOF
)"
```

Return the **PR URL** to the user.

### 5. Post-create checklist

- Title matches the dominant change (not the last commit only)
- Body includes test plan with checkboxes
- No secrets, `.env`, or credentials in the PR
- Breaking changes called out in Summary
- Link to related issue if user provided one (`Closes #123`)

## Non-goals

- Do not amend commits unless user rule allows
- Do not update git config
- Do not use `git add .` when preparing split commits (`split-to-prs` owns that)

## Copy-paste entry prompt

```text
Use the pull-request skill.
Task: <feature or fix name>
Detect the repository default base branch (do not assume main).
Include QA handoff from the last phase if available.
Open the PR when ready.
```

## Example title + summary

**Title:** `fix(orders): fetch checkout success details from API`

**Summary bullets:**

- Success page loads order via `GET /api/shop/orders/[orderRef]` instead of localStorage/session fallbacks
- Guest confirmation links include `email` for WooCommerce lookup
- Offline checkout uses httpOnly confirmation cookie
