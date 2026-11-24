import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Apology-as-a-service: for $3 a note, we write and send a sincere sorry from your lazy AI agent to every human still waiting on its unfinished tasks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
