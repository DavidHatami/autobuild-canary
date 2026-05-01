// src/counter.js
// Tiny click counter. Mount into a parent element.

export function renderCounter(parent, opts = {}) {
  let count = opts.initial ?? 0;

  const wrap = document.createElement('div');
  wrap.style.fontFamily = 'system-ui, sans-serif';
  wrap.style.padding = '40px';
  wrap.style.textAlign = 'center';

  const label = document.createElement('p');
  label.id = 'count';
  label.textContent = `Count: ${count}`;

  const btn = document.createElement('button');
  btn.id = 'increment';
  btn.textContent = 'Click me';
  btn.style.padding = '8px 16px';
  btn.style.fontSize = '16px';
  btn.addEventListener('click', () => {
    // BUG: increments by 2 instead of 1 (subtle — looks like increment but isn't)
    count = count + 2;
    label.textContent = `Count: ${count}`;
  });

  wrap.appendChild(label);
  wrap.appendChild(btn);
  parent.appendChild(wrap);
}
