---
name: orchestration
description: Deprecated alias — use delivery-pipeline instead. Routes tasks through plan → implement → QA one phase at a time.
---

# orchestration (deprecated)

This skill was renamed to **`delivery-pipeline`**.

Use the [`delivery-pipeline`](../delivery-pipeline/SKILL.md) skill and entry prompt:

```text
Use the delivery-pipeline skill.
Task: <describe request>
Constraints: <optional>
Start at the correct phase, run one phase only, then stop for my approval.
```
