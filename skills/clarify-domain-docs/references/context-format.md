# CONTEXT.md Format

```md
# <Context Name>

<One or two sentences about what this context means.>

## Language

**<Canonical Term>**:
<One or two sentence definition.>
_Avoid_: <synonyms or overloaded terms>
```

## Rules

- Include only project-specific domain language.
- Pick one canonical term when synonyms compete.
- List rejected synonyms under `_Avoid_`.
- Keep implementation, task plans, and requirements out.
- Create the file lazily when the first real term is resolved.

## Multi-Context Repos

If `CONTEXT-MAP.md` exists, use it to find the relevant context.

```md
# Context Map

## Contexts

- [Billing](./src/billing/CONTEXT.md) - handles invoices and payments
- [Fulfillment](./src/fulfillment/CONTEXT.md) - handles picking and shipping

## Relationships

- Billing consumes fulfillment events to create invoices.
```

