// src/unused-helper.js
// This file exists but its export is never actually called.
// The audit should detect it as dead code.

export function greet(name) {
  return `Hello, ${name}!`;
}

export function farewell(name) {
  return `Goodbye, ${name}!`;
}

export const SOME_CONSTANT = 42;
