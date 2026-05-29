---
name: collect-task-context
description: Builds a minimal task-specific context packet for an agent. Use when user wants context for a coding task, needs to prepare an agent handoff, or asks what files, constraints, tests, and evidence should be given to an implementation agent.
---

# Collect Task Context

Gather the smallest reproducible context packet for one task.

This is not a repo dump. Include only evidence that helps plan, edit, or verify the task.

## Process

1. Identify the task, expected behavior, and acceptance criteria.
2. Read project agent docs and relevant domain docs.
3. Map allowed changes, read-only context, and forbidden paths.
4. Find change candidates, call sites, interfaces, tests, fixtures, and configs.
5. Record verification commands and known gaps.
6. Capture provenance: branch, base, date, and commands used.

Use [packet-format.md](references/packet-format.md) when writing a formal packet.

## Include

- task summary
- relevant files and symbols with why each matters
- scope and forbidden changes
- product/domain rules
- architecture, API, DB, or event contracts when relevant
- focused tests and broader checks
- assumptions and open questions

## Exclude

- generated files unless directly relevant
- vendor and caches
- broad docs with no task-specific takeaway
- secrets, tokens, private credentials
- stale docs unless conflict matters

## Output

Return `ready`, `ready_with_assumptions`, or `not_ready`.

If not ready, name the blocking missing fact. If ready, keep the packet compact enough that another agent can use it immediately.

