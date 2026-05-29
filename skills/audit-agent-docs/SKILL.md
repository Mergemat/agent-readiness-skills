---
name: audit-agent-docs
description: Audits a repository's agent-readable docs for whether an agent can safely start work. Use when user asks if a repo is ready for coding agents, wants readiness gaps, or asks to review AGENTS.md, CONTEXT.md, docs/agents, build, test, owner, or tool policy docs.
---

# Audit Agent Docs

Audit whether existing project docs give an agent enough facts to start work without guessing.

Do not edit by default. Report gaps first.

## Inspect

Look for:

- root agent instructions: `AGENTS.md`, `CLAUDE.md`, or equivalent
- domain language: `CONTEXT.md` or `CONTEXT-MAP.md`
- durable decisions: `docs/adr/`
- agent docs: `docs/agents/` or project equivalent
- build, test, owner, security, and tool policy facts
- package scripts, CI config, test config, and obvious entrypoints

If files are absent, inspect the repo directly before calling it a gap.

## Audit Questions

The docs should let an agent answer:

- Where should I start reading?
- How do I install, build, run, lint, typecheck, and test?
- Which modules are likely in scope?
- Which paths or actions need approval?
- Who owns decisions or review?
- Which known risks should not be "fixed" accidentally?
- Which tools, connectors, skills, hooks, and side effects are allowed?

For a deeper checklist, use [readiness-questions.md](references/readiness-questions.md).

## Output

Return:

- `ready`, `ready_with_gaps`, or `not_ready`
- highest-risk gaps first
- evidence: file path or command result
- concrete fix for each gap
- docs that are redundant or should become skills

Do not demand placeholder docs. If a fact is not needed for safe work, say so.

