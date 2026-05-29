---
name: audit-runtime-policy
description: Audits tool, connector, skill, hook, side-effect, and approval policy for a repo or task. Use when user asks what tools are allowed, whether MCP/connectors/skills may be used, or wants runtime-policy gaps before agent execution.
---

# Audit Runtime Policy

Check what an agent may do in this repo or task.

This skill audits policy. It does not grant permissions.

## Inspect

Look for:

- root agent instructions
- `docs/agents/tool-policy.md` or equivalent
- task-specific instructions
- CI, hooks, pre-commit, lint-staged, or workflow files
- connector, MCP, and skill configuration
- approval rules for writes, network, deploy, secrets, and destructive actions

Use [policy-format.md](references/policy-format.md) for formal policy output.

## Classify

For each requested or available capability, classify:

- `allowed`
- `allowed_with_approval`
- `read_only`
- `forbidden`
- `unknown`

Also classify risk:

- local read
- local write
- network read
- external write
- secrets/data
- destructive
- deploy/runtime

## Output

Return:

- allowed tools and limits
- blocked or approval-gated actions
- missing policy facts
- required checks or hooks
- deviations from task or repo policy

If policy is missing, recommend the smallest `docs/agents/tool-policy.md` entry needed.

