/**
 * Sync local changes to GitHub main: add all, commit (if changes), push.
 * Run: npm run sync
 * Custom message: npm run sync -- "your commit message"
 */
const { execSync } = require("child_process");

const message = process.argv[2] || "chore: sync to main";

try {
  execSync("git add -A", { stdio: "inherit" });
  try {
    execSync("git commit -m " + JSON.stringify(message), { stdio: "inherit" });
  } catch (e) {
    if (e.status === 1) console.log("No changes to commit.");
  }
  execSync("git push origin main", { stdio: "inherit" });
  console.log("Done. main is up to date.");
} catch (e) {
  process.exit(e.status ?? 1);
}
