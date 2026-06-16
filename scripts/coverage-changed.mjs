import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

function getChangedLibFiles() {
  try {
    const unstaged = execSync("git diff --name-only HEAD", { encoding: "utf-8" });
    const staged = execSync("git diff --cached --name-only", { encoding: "utf-8" });
    const untracked = execSync("git ls-files --others --exclude-standard src/lib", {
      encoding: "utf-8"
    });

    return [
      ...new Set(
        [...unstaged.split("\n"), ...staged.split("\n"), ...untracked.split("\n")].filter(Boolean)
      )
    ].filter((file) => file.startsWith("src/lib/") && /\.(ts|tsx)$/.test(file));
  } catch {
    return [];
  }
}

const changedFiles = getChangedLibFiles();

if (changedFiles.length === 0) {
  console.log("No changed src/lib files. Coverage for changed files: n/a");
  process.exit(0);
}

console.log(`Running coverage for changed src/lib files:\n- ${changedFiles.join("\n- ")}\n`);
execSync("npx vitest run --coverage", { stdio: "inherit" });

const summaryPath = join(process.cwd(), "coverage/coverage-summary.json");
if (!existsSync(summaryPath)) {
  console.error("coverage/coverage-summary.json not found after coverage run.");
  process.exit(1);
}

const summary = JSON.parse(readFileSync(summaryPath, "utf-8"));

console.log("\nChanged src/lib file coverage:");
for (const file of changedFiles) {
  const summaryKey = Object.keys(summary).find((key) => key.endsWith(file));
  if (!summaryKey) {
    console.log(`- ${file}: no coverage data`);
    continue;
  }

  const metrics = summary[summaryKey];
  console.log(
    `- ${file}: lines ${metrics.lines.pct}%, branches ${metrics.branches.pct}%, functions ${metrics.functions.pct}%, statements ${metrics.statements.pct}%`
  );
}
