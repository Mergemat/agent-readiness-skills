# Agent Readiness Skills

Small, composable skills for making repositories usable by coding agents.

[Русская версия](README.ru.md)

This repo replaces large readiness manuals with reusable procedures. Project-specific facts stay in the target repository. Procedures live here as skills.

## Principles

- Concise: `SKILL.md` is the entry point, not a manual.
- One thing: each skill owns one repeatable workflow.
- Composable: skills can be chained, but none owns the whole process.
- Progressive: detailed formats live in `references/` and are loaded only when needed.
- Harness-agnostic: no Claude, Codex, Cursor, or MCP-specific dependency in core instructions.

## Skills

- **[scaffold-agent-docs](skills/scaffold-agent-docs/SKILL.md)** - create minimal agent-readable project docs.
- **[audit-agent-docs](skills/audit-agent-docs/SKILL.md)** - audit whether existing docs let an agent start safely.
- **[clarify-domain-docs](skills/clarify-domain-docs/SKILL.md)** - resolve project language and durable decisions into `CONTEXT.md` and ADRs.
- **[collect-task-context](skills/collect-task-context/SKILL.md)** - gather task-specific context before implementation.
- **[write-agent-brief](skills/write-agent-brief/SKILL.md)** - write a durable implementation brief for an agent.
- **[audit-runtime-policy](skills/audit-runtime-policy/SKILL.md)** - check tool, connector, skill, and hook policy for a repo or task.

## Workflow

These skills are meant to be chained, but each one stays useful on its own.

### New Repo: Make It Agent-Readable

Use this when a repository has no agent docs, stale onboarding docs, or a large readiness pack nobody wants to maintain.

1. Run `/scaffold-agent-docs` to create the smallest set of project facts: entry instructions, domain glossary, build/test docs, owners, and tool policy.
2. Run `/audit-agent-docs` to check whether an agent can answer where to start, what to change, what to avoid, and how to verify work.
3. Fix only real gaps. Do not create empty placeholder docs.

### New Feature Or Bug: Prepare The Task

Use this before handing work to an implementation agent.

1. Run `/clarify-domain-docs` if the request uses fuzzy or overloaded language.
2. Run `/collect-task-context` to gather relevant files, interfaces, tests, constraints, and verification commands.
3. Run `/audit-runtime-policy` if the task may use network, external connectors, MCP, additional skills, package installs, deploy, secrets, or destructive actions.
4. Run `/write-agent-brief` to produce a durable implementation brief.

### Before Agent Execution: Check Safety

Use this when work is ready but the allowed runtime is unclear.

1. Run `/audit-runtime-policy`.
2. Confirm which tools are `allowed`, `read_only`, `allowed_with_approval`, `forbidden`, or `unknown`.
3. Add the smallest missing policy entry to the target repo.

### After A Session: Improve The Source Of Truth

Use this when implementation exposed missing language, stale docs, or unclear decisions.

1. Run `/clarify-domain-docs` to update `CONTEXT.md` or record an ADR.
2. Run `/audit-agent-docs` to make sure the new facts are discoverable.

## Install

After publishing this repository to GitHub, install all skills with:

```bash
npx skills add <owner>/agent-readiness-skills --skill '*'
```

Install one skill:

```bash
npx skills add <owner>/agent-readiness-skills --skill audit-agent-docs
```

List skills without installing:

```bash
npx skills add <owner>/agent-readiness-skills --list
```

Replace `<owner>` with the GitHub owner or organization.

## Project Docs These Skills Expect

Target repositories can use any layout, but the default lightweight layout is:

```text
AGENTS.md
CONTEXT.md
docs/
  adr/
  agents/
    build.md
    testing.md
    owners.md
    tool-policy.md
```

Use fewer files when fewer facts exist. Do not create placeholder docs just to satisfy a standard.

## Validation

```bash
bun run validate
```
