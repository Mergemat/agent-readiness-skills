# Readiness Questions

Use these questions only when a formal audit is requested.

## Start

- Is there a single entry point for agents?
- Does it point to facts, not duplicate them?
- Does it tell the agent when to stop and ask?

## Build And Test

- Are install, build, local run, lint, typecheck, and test commands explicit?
- Are known failing checks named with current evidence?
- Are generated artifacts and caches excluded?

## Scope And Ownership

- Are working areas and forbidden areas visible?
- Are owners or escalation paths named?
- Are approval conditions stated for risky work?

## Domain And Decisions

- Is project-specific language defined?
- Are hard-to-reverse, surprising, trade-off decisions recorded as ADRs?
- Are stale docs identified as stale?

## Runtime

- Are tool classes and side effects classified?
- Are external connectors and privileged actions approval-gated?
- Are skills allowed by policy rather than by accident?

