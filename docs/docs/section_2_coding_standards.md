# ✍️ SECTION 2: Coding Standards

> This section outlines how code should be written across all projects — ensuring readability, consistency, and quality regardless of the tech stack (web, app, backend, or future AI/ML systems).

---

## 🎯 Purpose
To standardize how developers write and organize code so that:
- 🔍 Code is easy to read and debug
- ✅ Best practices are baked into every feature
- 🚫 Errors and miscommunications are reduced
- 🔁 Reusability is encouraged

---

## 📦 2.1 Language & Syntax Standards

### ✅ JavaScript/TypeScript
- Always use `const` and `let` (never `var`).
- Use arrow functions for inline/anonymous functions.
- Use async/await instead of `.then()`.
- Always type your functions and interfaces in TypeScript.
- Avoid magic numbers or strings — define constants.

### ✅ Python
- Follow PEP8 styling.
- Use snake_case for variables/functions.
- Prefer list comprehensions over loops for clean mapping.
- Use type hints (`def func(x: int) -> bool:`).
- Use `dataclasses` for models/entities.

### ✅ Dart (Flutter)
- Use `final` and `const` for immutability.
- Widget build functions should be lean (< 40 lines).
- Group widgets logically using custom components.
- Use `late` only when necessary.

---

## 📁 2.2 Folder & File Naming Rules

| Item               | Convention       | Example                         |
|--------------------|------------------|----------------------------------|
| Component          | PascalCase       | `UserCard.jsx`                  |
| Page / Screen File | PascalCase       | `CheckoutPage.js`              |
| Utility Function   | camelCase        | `formatCurrency.js`            |
| Constants          | UPPER_SNAKE_CASE | `MAX_LOGIN_ATTEMPTS.js`        |
| Backend Service    | kebab-case       | `user-service.js`              |

---

## 🧠 2.3 Clean Code Practices

### 🔸 General
- Each file = 1 module/component/class.
- Functions should be max **40–50 lines**.
- Each function should do **one** thing (SRP).
- Avoid nested conditions (early return preferred).

### 🔸 Examples
```js
// ✅ Good
if (!user) return null;

// ❌ Bad
if (user) {
  // ... 10 nested lines
}
```

- No deeply nested logic (max 2 levels).
- Break large JSX into smaller components.

---

## 🗃 2.4 Comments & Documentation

### ✅ When to comment:
- Complex logic that isn’t self-evident
- Important business rules or data constraints

### ❌ When NOT to comment:
- Obvious things (`i++ // increment i`)

### ✍️ Required:
- Use JSDoc / docstrings for every exported function, class, and service.

**Example (JS):**
```js
/**
 * Calculates the user discount
 * @param {number} price
 * @param {number} percent
 * @returns {number}
 */
function calculateDiscount(price, percent) {
  return price * (percent / 100);
}
```

---

## ✅ 2.5 Do & Don’t Summary

| ✅ Do                           | 🚫 Don’t                            |
|-------------------------------|-------------------------------------|
| Use arrow functions           | Use `function()` unnecessarily       |
| Use async/await               | Use `.then().catch()` everywhere     |
| Break large logic into parts | Cram everything in one function      |
| Name descriptively            | Use vague vars like `x`, `temp`, `data` |
| Add meaningful comments       | Comment the obvious                 |
| Type everything (TS/Python)  | Leave code untyped                  |

---

## 🛡️ 2.6 Enforced via Tools

| Tool        | Purpose                        |
|-------------|---------------------------------|
| ESLint      | Linting & code rule enforcement |
| Prettier    | Formatting & auto-style fixing  |
| EditorConfig| File format & indentation rules |
| SonarLint   | Static analysis & anti-patterns |

All repositories must include:
- `.eslintrc`, `.prettierrc`, `.editorconfig`
- Pre-commit hooks using Husky (optional)

---

## ✅ Code Quality Checklist

| ✅ | Requirement                                 |
|----|---------------------------------------------|
| ☐  | File follows proper naming conventions      |
| ☐  | Function < 50 lines and single-purpose      |
| ☐  | No nested `if`/`for` > 2 levels             |
| ☐  | All exported functions are documented       |
| ☐  | No console.log in production code           |
| ☐  | Code is properly formatted (Prettier)       |
| ☐  | Uses async/await for all async operations   |

---

