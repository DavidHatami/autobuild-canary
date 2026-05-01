// src/main.js
// Canary entry point. Mounts a tiny counter widget into #app.

import { renderCounter } from './counter.js';
import { greet } from './unused-helper.js';  // BUG: import never used

const root = document.querySelector('#app');
if (root) {
  renderCounter(root, { initial: 0 });
}
