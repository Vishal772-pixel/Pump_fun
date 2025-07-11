# 🔧 SECTION 3: Git & Version Control

> A professional-grade, scalable Git workflow and version control strategy tailored to agency projects ranging from small websites to enterprise apps.

---

## 🎯 Purpose
To standardize how developers collaborate, commit, review, and deploy using Git — with clarity, accountability, and long-term maintainability.

---

## 🚀 Branching Strategy: Custom Flow

We use a **custom-named flow** instead of traditional `dev → alpha → prod`, which provides more clarity, value, and professionalism.

### 🔁 Main Flow:
```
workspace → quality-gate → launchpad
```

| Stage Name     | Purpose                                                             |
|----------------|---------------------------------------------------------------------|
| `workspace`     | Developer playground: all active development starts here             |
| `quality-gate`  | QA-tested, internally approved builds: pre-production validation    |
| `launchpad`     | Final, stable, production-ready code deployed to clients/users     |

---

## 🌱 Supporting Branch Types

| Branch Type | Format                  | Purpose                                                       |
|-------------|--------------------------|----------------------------------------------------------------|
| Feature     | `feature/<name>`        | New features; merged into `workspace`                         |
| Fix         | `fix/<bug>`             | Bug fixes; merged into `workspace` or `quality-gate`          |
| Hotfix      | `hotfix/<issue>`        | Urgent production issues; merged directly into `launchpad`    |
| Experiment  | `lab/<experiment>`      | Spikes, PoCs, internal test ideas                              |

---

## 🔀 Merge Strategy

| From           | To              | Requirements                                         |
|----------------|------------------|------------------------------------------------------|
| `feature/*`     | `workspace`       | Peer review preferred, auto-tests must pass          |
| `workspace`     | `quality-gate`    | Weekly merge cycle, QA checklist before merge        |
| `quality-gate`  | `launchpad`       | Final UAT or client approval, tagged release         |
| `hotfix/*`      | `launchpad`       | Mandatory reviewer, post-deploy patch                |

---

## 🧾 Naming Guidelines

| Element           | Convention            | Example                          |
|------------------|------------------------|----------------------------------|
| Feature Branch    | `feature/<hyphen-name>`| `feature/invoice-discount`       |
| Bug Fix Branch    | `fix/<short-issue>`    | `fix/payment-timeout`            |
| Hotfix Branch     | `hotfix/<urgent-issue>`| `hotfix/token-expiry-crash`      |
| Spike Branch      | `lab/<experiment>`     | `lab/new-price-logic`            |

---

## 💬 Commit Message Style: Conventional Commits

| Prefix     | Purpose                                      |
|------------|----------------------------------------------|
| `feat:`     | New feature                                  |
| `fix:`      | Bug fix                                      |
| `chore:`    | Cleanup, tooling, configs                    |
| `docs:`     | Documentation updates                        |
| `refactor:` | Code restructure, no logic change            |
| `test:`     | Test-related commits                         |

**Examples:**
```bash
feat: add OTP validation to login
fix: correct rounding error in invoice total
chore: update Prettier config
```

---

## 🛡 Branch Protections

| Branch         | Protection Rules                                     |
|----------------|-------------------------------------------------------|
| `workspace`     | Open, reviewed merges preferred, CI on PRs            |
| `quality-gate`  | Protected: test results, checklist, 1 reviewer needed |
| `launchpad`     | Highly protected: only maintainers can merge          |

---

## 🧪 QA & Review Policy

| Branch         | Reviewed by          | Testing Required     |
|----------------|-----------------------|-----------------------|
| `workspace`     | Peer or team lead     | Unit & integration    |
| `quality-gate`  | QA team               | Manual + E2E testing  |
| `launchpad`     | CTO / Project Owner   | UAT passed            |

---

## 🏷 Tagging and Releases

- Tags only applied on `launchpad`
- Format: `v1.0.0`, `v2.0.1-hotfix`, `v1.1.0-rc`
- Each release must update `CHANGELOG.md`

---

## 📁 Essential Git Files in Every Repo

```
.gitignore           # Properly scoped per language/framework
.gitattributes       # Normalize EOL, enforce diff rules
README.md            # Clear setup and run instructions
CONTRIBUTING.md      # PR process, rules, commit guide
CHANGELOG.md         # Track release history
```

---

## ✅ Git Hygiene & Team Discipline Checklist

| ✅ | Must-Have                                                        |
|----|------------------------------------------------------------------|
| ☐  | Branch names follow format (`feature/`, `fix/`, etc.)            |
| ☐  | No direct commits to `quality-gate` or `launchpad`              |
| ☐  | PR titles follow Conventional Commit standard                    |
| ☐  | Rebase before PR (if needed)                                     |
| ☐  | `CHANGELOG.md` updated before every release                      |
| ☐  | PR reviewed by someone other than the author                     |
| ☐  | Tests pass before merging                                        |

---
