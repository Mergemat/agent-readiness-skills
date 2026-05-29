# Agent Instructions

This repository is a harness-agnostic skill library.

Use Bun for local scripts.

Before changing a skill:

- keep `SKILL.md` under 100 lines
- keep each skill responsible for one workflow
- put advanced formats in `references/`
- avoid harness-specific instructions unless the skill is explicitly about that harness
- run `bun run validate`

Do not add generated install manifests unless the user asks for a specific harness.

