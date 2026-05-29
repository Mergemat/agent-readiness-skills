# Minimal Templates

Use these as seeds. Delete sections that are not real.

## AGENTS.md

```md
# Agent Instructions

Read first:

- `CONTEXT.md` for project language
- `docs/agents/build.md` for build and run commands
- `docs/agents/testing.md` for verification
- `docs/agents/owners.md` for approval paths
- `docs/agents/tool-policy.md` for tool limits

Before editing, check git status and identify existing user changes.

Stop and ask before changing forbidden paths, secrets, deploy config, external contracts, or anything requiring owner approval.
```

## CONTEXT.md

```md
# <Project Name>

<One or two sentences about the project domain.>

## Language

**<Term>**:
<One or two sentence definition.>
_Avoid_: <synonyms to avoid>
```

## build.md

```md
# Build

- Install:
- Run locally:
- Build:
- Required env:
- Runtime entrypoints:
- Known gaps:
```

## testing.md

```md
# Testing

- Lint:
- Typecheck:
- Unit tests:
- Integration tests:
- Focused test command:
- Known baseline failures:
```

## owners.md

```md
# Owners

- Service owner:
- Backup:
- Runtime/deploy:
- Security/data:
- Approval required for:
- Escalation:
```

## tool-policy.md

```md
# Tool Policy

- Built-in file/search/shell tools:
- Network:
- Browser:
- External connectors:
- MCP servers:
- Skills:
- Hooks:
- Actions requiring approval:
```

