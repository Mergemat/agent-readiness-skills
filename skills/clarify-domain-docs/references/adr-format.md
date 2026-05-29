# ADR Format

ADRs live in `docs/adr/` unless the repo has a different convention.

Use sequential files:

```text
0001-short-slug.md
0002-short-slug.md
```

## Template

```md
# <Decision Title>

<One to three sentences: context, decision, reason.>
```

Optional sections are allowed only when useful:

- Status
- Considered options
- Consequences

## When To Record

Record a decision only when all are true:

- hard to reverse
- surprising without context
- result of a real trade-off

Skip ADRs for obvious, local, or temporary choices.

