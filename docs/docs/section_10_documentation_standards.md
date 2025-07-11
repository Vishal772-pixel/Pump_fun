# 📚 SECTION 10: Documentation & Internal Wiki Standards

> This section outlines how documentation should be created, maintained, and accessed for all codebases, APIs, systems, and internal tools across the agency.

---

## 🎯 Purpose
To:
- 💡 Ensure all team members can understand and contribute to projects
- 🚀 Speed up onboarding and reduce tribal knowledge
- 🔍 Provide reliable documentation for product, technical, and ops use

---

## 🗂️ 10.1 Documentation Types

| Type              | Description                                               | Tool Suggestions           |
|-------------------|-----------------------------------------------------------|----------------------------|
| Code Comments     | In-line explanations within codebase                     | JS/TS comments, DocBlocks  |
| README.md         | Project-level summary, setup instructions                | Markdown                   |
| API Docs          | Swagger/OpenAPI or manual REST docs                      | Postman, Redoc, Swagger    |
| Internal Wiki     | Agency knowledge base (tech, onboarding, SOPs)           | Notion, Confluence         |
| Architecture Docs | System diagrams, deployment flows                        | Whimsical, Miro, Markdown  |

---

## 📁 10.2 Project Folder Structure

Each repo must contain:
```
/README.md
/docs/architecture.md
/docs/api-reference.md
/docs/dev-guide.md
CHANGELOG.md
.env.example
```

---

## 📝 10.3 README.md Format

Every project must have a root `README.md` with the following sections:

```markdown
# Project Name

## Overview
Brief 2-4 sentence description of the project.

## Setup
Steps to clone, install, and run locally.

## Environments
Which environments exist and how to configure `.env.*`

## API Reference
Link to `/docs/api-reference.md` or Swagger UI

## Deployment
How to deploy (manual or CI/CD)

## Contributing
Branch naming, PR rules, CI steps, testing

## License
If applicable
```

---

## 🔄 10.4 Updating Documentation

- All docs must be updated **alongside code** in the same PR
- New endpoints or changes must reflect in API docs
- If config or environment changes, `.env.example` must be updated
- Outdated docs should be flagged and fixed during QA/review

---

## 📚 10.5 Internal Wiki Guidelines

- Use Notion or Confluence for all:
  - Engineering SOPs
  - Hiring/Onboarding docs
  - Meeting notes
  - Product requirements
  - Team policies (leave, code of conduct, escalation)
- Keep navigation simple with clear categories
- Tag each page with responsible team or owner
- Update wiki every sprint or release

---

## ✅ Documentation Quality Checklist

| ✅ | Requirement                                                   |
|----|---------------------------------------------------------------|
| ☐  | README.md exists and follows template                        |
| ☐  | All new APIs are documented in Swagger or `/docs/api.md`    |
| ☐  | Dev guide available in `/docs/dev-guide.md`                 |
| ☐  | `.env.example` reflects current env variables                |
| ☐  | Internal wiki has up-to-date SOPs and architecture docs     |
| ☐  | Onboarding steps tested and documented                      |
| ☐  | Diagrams use agency branding and notation                   |

---

