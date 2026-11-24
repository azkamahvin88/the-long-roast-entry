// The Long Roast: Lawmakers and the File They Cannot Convert —
// a make.fun entry (program/v1, Node 22+, standard library only,
// no network, no model calls, fully deterministic).
//
// The entry is one roast, one line, about lawmakers and a file they
// cannot convert. The line itself is the whole entry: no code, no
// explanation, nothing else. It is written to /output/entry.txt.
//
// The joke: lawmakers can pass a law about anything — except the
// file itself stays unconverted. Bureaucracy as a file format:
// every committee it passes through leaves it exactly as it was,
// and the final "solution" is to legislate the problem away on
// paper while the file quietly remains a .docx. Three beats —
// try, escalate, legislate — so the punch lands on the last word.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Congress couldn't convert the file, so they formed a subcommittee to convert it — which also couldn't convert it — so they passed a law declaring it converted.";

// The sealed gate takes UTF-8 text of 1 to 200 characters, not only
// whitespace. Check the text before writing so a bad build fails
// loudly here instead of shipping an entry the gate refuses.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters; the gate needs 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim()
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

console.log(`wrote entry.txt (${chars} characters + newline)`);
