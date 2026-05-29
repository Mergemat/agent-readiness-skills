# Agent Brief Format

```md
## Agent Brief

**Category:** bug | enhancement | refactor | chore
**Summary:** <one-line result>

**Current behavior:**
<What happens now.>

**Desired behavior:**
<What should happen when done.>

**Key interfaces:**

- `<interface or concept>` - `<what changes or must stay true>`

**Acceptance criteria:**

- [ ] <specific check>
- [ ] <specific check>
- [ ] <specific check>

**Verification:**

- `<command or manual check>`

**Out of scope:**

- <thing not to change>

**Review / approval:**

- <owner or approval condition, if any>
```

## Good Briefs

- describe behavior
- name stable interfaces
- define done
- state boundaries

## Bad Briefs

- say "fix the thing"
- reference fragile line numbers
- prescribe a patch before exploration
- omit verification

