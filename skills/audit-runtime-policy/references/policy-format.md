# Tool Policy Format

```md
# Tool Policy

## Built-In Tools

- Filesystem read:
- Filesystem write:
- Shell:
- Browser:
- Network:

## External Capabilities

- Connectors:
- MCP servers:
- Skills:
- Subagents:
- Package installs:

## Hooks And Checks

- Required before final:
- Required before commit:
- Required in CI:

## Approval Required

- Secrets or credentials:
- External writes:
- Deploy/runtime changes:
- Destructive data actions:
- Protected branches:

## Forbidden

- <capability or action> - <reason>
```

