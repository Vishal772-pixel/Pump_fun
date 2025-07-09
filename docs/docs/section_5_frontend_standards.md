# 🎨 SECTION 5: Frontend Development Standards

> This section defines how frontend code — for both websites and web apps — should be structured, written, styled, and optimized at our agency.

---

## 🎯 Purpose
To ensure that all frontend experiences:
- 🧠 Are maintainable and scalable
- 📱 Work across devices and browsers
- 🎯 Meet performance and accessibility benchmarks
- 🧩 Follow consistent UI/UX patterns

---

## 🛠️ 5.0 Frontend Project Setup Reference

### 💡 When to Use Which Framework

Choosing the right frontend framework depends on the nature of the project:

| Framework | Use Case |
|----------|----------|
| **Vue 3** | Ideal for **large product-based applications**, internal dashboards, and **3D creative websites** with smooth performance and higher FPS using libraries like Three.js, GSAP, or custom WebGL renderers. Recommended when **modular architecture** and scalability is a priority. |
| **Next.js** | Best suited for **content-heavy websites**, **marketing pages**, and SEO-focused applications where SSR (Server-Side Rendering) or SSG (Static Site Generation) is important. Good for agency sites, landing pages, blogs, and client portfolios. |
| **React (Vite)** | Suitable for fast **prototyping**, **component libraries**, and **smaller single-page applications**. Great for teams familiar with React ecosystem who prefer lightweight builds without the full Next.js stack. |

### 🚀 React Setup (with Vite + TypeScript)
```bash
npm create vite@latest my-app --template react-ts
cd my-app
npm install
npm install -D eslint prettier eslint-plugin-react eslint-config-prettier
```
- Add `.eslintrc`, `.prettierrc`, and set `vite.config.ts` for aliasing.
- Use `/src` folder structure as documented below.

### ⚡ Next.js Setup
```bash
npx create-next-app@latest my-next-app --typescript
cd my-next-app
npm install
```
- Add TailwindCSS (optional):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Include required paths in `tailwind.config.js`

### 🌿 Vue 3 Setup (Vite + TypeScript + Tailwind)
```bash
npm create vue@latest
# Choose: Vite, TypeScript, Router, Pinia, ESLint, Prettier
cd my-vue-app
npm install
```
- Add TailwindCSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Update `main.ts` with Tailwind entry point.

---

## 🧱 5.1 Project Structure (React / Next.js / Vue.js)

```
/src
  /components       # Reusable UI components
  /features         # Feature-level logic and views
  /layouts          # Page skeletons
  /pages            # Next.js or Vue routes/screens
  /styles           # Global and module-specific styles
  /hooks            # Custom logic hooks (for React)
  /composables      # Reusable logic (for Vue 3)
  /services         # API and logic integrations
  /constants        # Static keys, config
  /utils            # General-purpose helpers
  /assets           # Images, icons, fonts
```

- Use **Barrel Exports (`index.js` or `index.ts`)** in folders.
- Every `page` or `screen` must be composed of small, modular components.
- In Vue, follow **Single File Component (SFC)** format: `.vue` with `<template>`, `<script>`, `<style>` sections.

---

## 📁 5.2 Component Standards

| Rule                             | Description                                      |
|----------------------------------|--------------------------------------------------|
| Naming                          | Use `PascalCase` for components                  |
| File Per Component              | Each component lives in its own file             |
| Props Interface                 | Use TS interfaces or PropTypes (React) / `defineProps` (Vue) |
| Reusability                     | Keep components pure and reusable                |
| Split Logic                     | Move complex logic into hooks/composables        |

---

## 🎨 5.3 Styling Guidelines

### CSS/SCSS:
- Use **BEM or module CSS** (`.module.scss`) for scoping
- Global styles go in `/styles/global.scss`
- Component-specific styles stay with the component

### TailwindCSS:
- Allowed for utility-based styling
- Must be paired with `classnames` (React) or `:class` bindings (Vue)
- Extract repetitive class combos into Tailwind presets or components

### Responsive Design:
- Use `rem`/`em` instead of `px`
- Follow mobile-first principle (start with `min-width`)
- Test on at least 3 breakpoints: mobile, tablet, desktop

---

## 🧠 5.4 State Management

| Situation        | Recommended Tool        |
|------------------|--------------------------|
| Local Component  | `useState` / `useReducer` (React), `ref` / `reactive` (Vue) |
| App-wide Global  | Zustand, Redux Toolkit (React), Pinia (Vue 3) |
| Server Cache     | React Query / SWR / Vue Query       |

- Always colocate state where it’s used.
- Normalize complex state data (e.g. `entities/users`) when using Redux or Pinia.

---

## 🧪 5.5 Testing Frontend Code

| Test Type      | Purpose                            | Tool                   |
|----------------|-------------------------------------|-------------------------|
| Unit Test      | Individual component logic          | Jest + RTL / Vue Test Utils |
| Integration    | Interaction between components      | Cypress, Playwright     |
| E2E            | Simulate real user flow             | Cypress, Playwright     |

- Aim for **80%+ test coverage**.
- All critical UI logic must have tests.

---

## ♿ 5.6 Accessibility (A11y)

- Use semantic HTML (`<button>`, `<nav>`, `<header>`)
- Every image must have `alt` text
- Ensure keyboard navigation is supported
- Color contrast must pass WCAG AA
- Use tools: axe DevTools, Lighthouse, screen readers

---

## ⚡ 5.7 Performance Optimization

| Optimization Area | Recommendation                                        |
|-------------------|--------------------------------------------------------|
| Code Splitting    | Use `React.lazy`, `next/dynamic`, Vue dynamic imports |
| Image Loading     | Use Next/Image or `loading="lazy"` / `<img loading="lazy">` |
| Font Loading      | Use font-display: swap + preload                      |
| Bundle Size       | Use `source-map-explorer`, Tree shaking               |
| Rendering         | Avoid unnecessary re-renders using `memo`, `useMemo`, or `watchEffect` |

---

## 🔄 5.8 Frontend DevOps & Deployment

- Lint before every commit (`eslint`, `stylelint`, `vue-eslint-parser`)
- Format code with Prettier
- Run accessibility audits in CI (Lighthouse)
- Set up preview deployments via Vercel/Netlify/Staging server

---

## ✅ Frontend Code Quality Checklist

| ✅ | Requirement                                                   |
|----|---------------------------------------------------------------|
| ☐  | Component names use PascalCase                                |
| ☐  | File and folder structure follows agency layout               |
| ☐  | State is colocated and modularized                           |
| ☐  | Component logic is pure and reusable                          |
| ☐  | Styling is scoped using modules or Tailwind                  |
| ☐  | Images are optimized and responsive                          |
| ☐  | Accessibility rules are met (alt, labels, tab focus, contrast)|
| ☐  | No console logs or TODOs in committed code                    |
| ☐  | Tests are written for all critical logic                      |

---
