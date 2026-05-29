---
name: clarify-domain-docs
description: Clarifies project language and durable decisions, then records them in CONTEXT.md and ADRs. Use when a plan has fuzzy terms, domain concepts are overloaded, user wants shared language, or decisions should be captured before implementation.
---

# Clarify Domain Docs

Resolve language and decisions before implementation.

Ask one question at a time. If code can answer the question, inspect the code instead of asking.

## Process

1. Read existing `CONTEXT.md`, `CONTEXT-MAP.md`, and relevant ADRs.
2. Identify overloaded, vague, or conflicting terms.
3. Challenge terms against code and docs.
4. Propose one canonical term and definition.
5. Update `CONTEXT.md` when a term is resolved.
6. Offer an ADR only for decisions that are hard to reverse, surprising, and trade-off driven.

Use [context-format.md](references/context-format.md) and [adr-format.md](references/adr-format.md) only when writing.

## Rules

- `CONTEXT.md` is a glossary, not a spec.
- Keep definitions one or two sentences.
- Do not include implementation details in glossary entries.
- Do not create ADRs for obvious or temporary choices.
- If multiple contexts exist, update the relevant context only.

## Output

End with:

- resolved terms
- changed docs
- decisions recorded or deliberately not recorded
- remaining open questions

