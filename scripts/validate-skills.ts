import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const root = process.cwd();
const skillsDir = join(root, "skills");
const errors: string[] = [];

function readSkillDirs() {
  return readdirSync(skillsDir)
    .map((name) => join(skillsDir, name))
    .filter((path) => statSync(path).isDirectory())
    .sort();
}

function walk(dir: string): string[] {
  return readdirSync(dir)
    .flatMap((name) => {
      const path = join(dir, name);
      if (name === ".git" || name === "node_modules") return [];
      if (statSync(path).isDirectory()) return walk(path);
      return [path];
    })
    .sort();
}

function markdownLinks(text: string) {
  const withoutFences = text.replace(/```[\s\S]*?```/g, "");
  return [...withoutFences.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(
    (match) => match[1],
  );
}

for (const dir of readSkillDirs()) {
  const name = dir.split("/").at(-1)!;
  const skillPath = join(dir, "SKILL.md");

  if (!existsSync(skillPath)) {
    errors.push(`${name}: missing SKILL.md`);
    continue;
  }

  const text = readFileSync(skillPath, "utf8");
  const lines = text.split("\n").length;
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);

  if (!frontmatter) {
    errors.push(`${name}: missing YAML frontmatter`);
    continue;
  }

  const declaredName = frontmatter[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const description = frontmatter[1]
    .match(/^description:\s*([\s\S]*?)(?:\n[a-zA-Z_-]+:|$)/m)?.[1]
    ?.trim();

  if (declaredName !== name) {
    errors.push(`${name}: frontmatter name must match directory`);
  }

  if (!description) {
    errors.push(`${name}: missing description`);
  } else if (!/Use when/i.test(description)) {
    errors.push(`${name}: description must include "Use when" trigger`);
  }

  if (lines > 100) {
    errors.push(`${name}: SKILL.md has ${lines} lines, expected <= 100`);
  }

}

for (const file of walk(root).filter((path) => path.endsWith(".md"))) {
  const text = readFileSync(file, "utf8");
  const label = file.slice(root.length + 1);

  for (const link of markdownLinks(text)) {
    if (/^[a-z]+:/i.test(link) || link.startsWith("#")) continue;
    const target = normalize(join(dirname(file), link.split("#")[0]));
    if (!existsSync(target)) errors.push(`${label}: broken link ${link}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("skills ok");
