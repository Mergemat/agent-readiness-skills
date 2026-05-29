---
name: write-agent-brief
description: Writes a durable implementation brief for an agent without overfitting to current file paths. Use when user wants to turn context, a bug report, PRD, plan, or conversation into an agent-ready issue, task brief, or implementation contract.
---

# Write Agent Brief

Write the contract an implementation agent can work from later.

Prefer behavior and interfaces over file paths. File paths go stale; contracts survive.

## Process

1. Read the current context and any task packet.
2. Separate current behavior from desired behavior.
3. Name key interfaces, data shapes, commands, and user-visible behavior.
4. State acceptance criteria as independent checks.
5. State out of scope explicitly.
6. Add human review or approval needs.

Use [brief-format.md](references/brief-format.md) for a formal brief.

## Rules

- Do not include line numbers.
- Avoid file paths unless the path itself is the contract.
- Do not prescribe implementation steps unless the user asked for a plan.
- Include verification commands when known.
- If requirements are ambiguous, list questions instead of inventing.

## Output

Return a brief ready to paste into an issue, PRD, or task tracker.

If publishing to an issue tracker, follow the repo's configured issue tracker docs. If no tracker is configured, only produce markdown.

