// g290-one-line-exit: writes one funny one-line resignation letter to /output/entry.txt.
// Chosen line (131 chars) from 8 distinct candidates (see comparison.md): an IT
// support worker finally following his own advice — turn it off and on again —
// and discovering he works better off. Specific job voice, surprise turn,
// quotable, reads like a real letter.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am resigning from IT support: I finally followed my own advice, turned myself off and on again, and discovered I work better off.";

// The gate needs exactly one line of UTF-8 text, 1 to 140 characters, not
// only white space — no trailing newline, so the file is the letter alone.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error("entry must be one line of 1-140 characters");
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
}

// Entry point: validate, then write the letter with no trailing newline.
validateLine(LINE);

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length}-char entry to /output/entry.txt`);
