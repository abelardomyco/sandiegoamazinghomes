# Git sync with GitHub — San Diego Amazing Homes (2025-02-15)

## Repo

- **Remote:** https://github.com/abelardomyco/sandiegoamazinghomes
- **Branch:** `main` (tracking `origin/main`)

## What was done

1. Initialized git in `sandiegoamazinghomes/`, added `.gitignore` (Node, Next.js, env, IDE).
2. Committed all project files and merged with the existing GitHub `main` (README conflict resolved).
3. Pushed to `origin main`. Local `main` tracks `origin/main`.
4. Added **continuous push** workflow:
   - **Script:** `scripts/sync-to-main.js` — runs `git add -A`, `git commit` (if changes), `git push origin main`.
   - **npm:** `npm run sync` or `npm run push` (same).
   - **VS Code task:** "Sync to main (push)" — run from Command Palette: **Tasks: Run Task** → **Sync to main (push)**.

## How to keep main in sync as you work

1. **After making changes:** Run **Tasks: Run Task** → **Sync to main (push)** (or `npm run sync` in the project folder).  
   - Stages all changes, commits with message `chore: sync to main`, and pushes to `main`.
2. **Custom commit message:**  
   `npm run sync -- "feat: add contact form"`

Merge to main is done by pushing: there is no separate merge step; push updates `main` on GitHub.

## Git config (this repo only)

- `user.name`: Abelardo  
- `user.email`: abelardomyco@users.noreply.github.com  

To change for this repo: `git config user.name "Your Name"` and `git config user.email "your@email.com"`.
