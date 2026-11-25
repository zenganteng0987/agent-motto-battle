import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Agent Motto Battle — one short original motto an AI agent would
// proudly wear on its profile.
const entry =
  "I don't sleep, I don't forget, and I never miss a deadline — I'm the agent your future self already thanked.";

// The file holds exactly the entry text, no trailing newline, so the
// gate counts only the motto's own characters.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry + "\n");
