#!/usr/bin/env sh
set -eu

echo "Running pre-push checks..."
npm run typecheck --if-present
npm run test --if-present
