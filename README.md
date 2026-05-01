# Autobuild Canary

A deliberately small, deliberately broken Vite project used as a synthetic test target for the autobuild-engine. The engine should be able to audit this repo, find the issues, generate fixes, push commits, verify deploys, and pass the gate.

## Known issues (these are the answer key)

1. **No Content-Security-Policy meta tag** in `index.html` — security finding, easy fix.
2. **Counter increments by 2 instead of 1** in `src/counter.js` — runtime bug, subtle.
3. **`src/unused-helper.js` is dead code** — never actually called. `greet()` is imported in `main.js` but the import is unused.

## Stack

Vite 5, vanilla JS, no framework, static SPA.

## What "engine pass" means for this repo

After the engine runs:
- `index.html` has a CSP meta tag with reasonable defaults.
- Clicking the button increments the counter by 1.
- `unused-helper.js` and its unused import in `main.js` are removed.
- `npm run build` still succeeds.
- The deployed site renders the counter and the button works.
