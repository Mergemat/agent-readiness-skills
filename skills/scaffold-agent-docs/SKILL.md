---
name: scaffold-agent-docs
description: Creates minimal agent-readable project docs without importing a large readiness framework. Use when user wants to set up AGENTS.md, CONTEXT.md, docs/agents, build/test/owner/tool-policy docs, or prepare a repo for coding agents.
---

# Scaffold Agent Docs

Create the smallest useful set of project-owned facts for agents.

Do not create placeholder documents just to match a standard. Prefer one accurate paragraph over a full empty template.

## Process

1. Inspect existing agent instructions, domain docs, ADRs, package scripts, CI, and test config.
2. Reuse existing files when they already serve the purpose.
3. Propose the exact files to create or update.
4. Write only facts discovered from the repo or confirmed by the user.
5. Mark unknown but required facts as `TBD` with owner or follow-up, not invented values.

## Default Layout

Use this layout unless the project already has a clearer one:

```text
AGENTS.md
CONTEXT.md
docs/agents/build.md
docs/agents/testing.md
docs/agents/owners.md
docs/agents/tool-policy.md
docs/adr/
```

Use [templates.md](references/templates.md) only when drafting files.

## Boundaries

- `AGENTS.md`: routing instructions and stop conditions.
- `CONTEXT.md`: domain vocabulary only.
- `docs/agents/build.md`: install, build, run, env facts.
- `docs/agents/testing.md`: checks and known failures.
- `docs/agents/owners.md`: decision owners and escalation.
- `docs/agents/tool-policy.md`: allowed tools, connectors, skills, hooks, approvals.
- `docs/adr/`: durable decisions only.

If a procedure appears in these docs, move it to a skill or reference an existing skill.

