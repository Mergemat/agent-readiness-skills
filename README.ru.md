# Agent Readiness Skills

Небольшой набор skills для подготовки репозиториев и задач к работе coding agents.

В репозитории нет CRPT-specific контекста: никаких внутренних сервисов, тикетов, доменных названий, URL, owners или корпоративных политик. Это переносимый набор процедур.

## Идея

Большие readiness-документы заменены маленькими skills:

- процедуры живут в skills;
- факты конкретного проекта живут в проектном репозитории;
- `SKILL.md` короткий;
- детали лежат в `references/` и читаются только при необходимости;
- инструкции не привязаны к Claude, Codex, Cursor или другому harness.

## Skills

- **[scaffold-agent-docs](skills/scaffold-agent-docs/SKILL.md)** - создать минимальные agent-readable docs в проекте.
- **[audit-agent-docs](skills/audit-agent-docs/SKILL.md)** - проверить, может ли агент безопасно стартовать по существующим docs.
- **[clarify-domain-docs](skills/clarify-domain-docs/SKILL.md)** - уточнить язык проекта и записать термины в `CONTEXT.md`, решения в ADR.
- **[collect-task-context](skills/collect-task-context/SKILL.md)** - собрать минимальный контекст под одну задачу.
- **[write-agent-brief](skills/write-agent-brief/SKILL.md)** - написать устойчивый brief для implementation agent.
- **[audit-runtime-policy](skills/audit-runtime-policy/SKILL.md)** - проверить разрешенные tools, connectors, skills, hooks и approvals.

## Workflow

Skills можно связывать в цепочку, но каждый skill остается самостоятельным.

### Новый репозиторий: сделать его понятным агенту

Используйте, когда в репозитории нет agent docs, onboarding устарел или есть большой readiness pack, который никто не хочет поддерживать.

1. Запустите `/scaffold-agent-docs`, чтобы создать минимальные факты проекта: стартовые инструкции, доменный глоссарий, build/test docs, owners и tool policy.
2. Запустите `/audit-agent-docs`, чтобы проверить, может ли агент понять, откуда стартовать, что менять, что не трогать и как проверять работу.
3. Исправьте только реальные gaps. Не создавайте пустые placeholder docs.

### Новая фича или баг: подготовить задачу

Используйте перед передачей работы implementation agent.

1. Запустите `/clarify-domain-docs`, если в задаче есть размытые или перегруженные термины.
2. Запустите `/collect-task-context`, чтобы собрать релевантные файлы, interfaces, тесты, constraints и verification commands.
3. Запустите `/audit-runtime-policy`, если задаче могут понадобиться network, external connectors, MCP, дополнительные skills, package installs, deploy, secrets или destructive actions.
4. Запустите `/write-agent-brief`, чтобы получить устойчивый implementation brief.

### Перед запуском агента: проверить безопасность

Используйте, когда задача готова, но runtime-ограничения неочевидны.

1. Запустите `/audit-runtime-policy`.
2. Подтвердите, какие tools имеют статус `allowed`, `read_only`, `allowed_with_approval`, `forbidden` или `unknown`.
3. Добавьте в целевой репозиторий минимальную недостающую policy-запись.

### После сессии: улучшить source of truth

Используйте, когда реализация показала нехватку языка, stale docs или неясное решение.

1. Запустите `/clarify-domain-docs`, чтобы обновить `CONTEXT.md` или записать ADR.
2. Запустите `/audit-agent-docs`, чтобы убедиться, что новые факты discoverable.

## Установка

После публикации на GitHub:

```bash
npx skills add <owner>/agent-readiness-skills --skill '*'
```

Установить один skill:

```bash
npx skills add <owner>/agent-readiness-skills --skill audit-agent-docs
```

Посмотреть список без установки:

```bash
npx skills add <owner>/agent-readiness-skills --list
```

Замените `<owner>` на GitHub owner или organization.

## Что должно оставаться в проекте

В проектном репозитории должны жить реальные факты проекта:

```text
AGENTS.md
CONTEXT.md
docs/adr/
docs/agents/build.md
docs/agents/testing.md
docs/agents/owners.md
docs/agents/tool-policy.md
```

Создавайте только те файлы, где есть реальные факты. Пустые шаблоны не считаются готовностью.

## Проверка этой repo

```bash
bun run validate
```
