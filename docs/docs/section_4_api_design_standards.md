# 🔌 SECTION 4: API Design & Integration Standards

> This section outlines how APIs should be designed, documented, consumed, and maintained across all web, app, and backend projects at our agency.

---

## 🎯 Purpose
To ensure that all APIs — whether REST, GraphQL, or internal services — are:
- 🔐 Secure by design
- 🔍 Well-structured and versioned
- 🔁 Easy to integrate and scale
- 🧾 Fully documented for both internal and external consumers

---

## 🧱 4.1 API Design Principles

### ✅ REST API Design (Default Standard)
- Follow **RESTful resource naming**:
  - `GET /users`, `POST /users`, `PUT /users/:id`, `DELETE /users/:id`
- Use plural nouns, no verbs in endpoint paths.
- Nest child resources:
  - `GET /users/:id/orders`

### ✅ GraphQL (If Applicable)
- All queries must be typed.
- Prefer fragments for repeated objects.
- Maintain a clear separation of queries and mutations.

### 🌍 API Versioning
- Use versioning in URL: `/api/v1/...`
- Do not break existing clients with new releases.

### 📦 Pagination, Sorting & Filtering
- Use query params:
  - `/users?page=2&limit=20`
  - `/products?sort=price_asc`
  - `/orders?status=shipped`

---

## 🔐 4.2 Security Standards

| Practice              | Description                                  |
|----------------------|----------------------------------------------|
| API Authentication   | Use OAuth2, JWT, or API Keys                 |
| Rate Limiting        | Protect against abuse (e.g., 100 req/min)    |
| Input Validation     | Validate & sanitize all incoming data        |
| HTTPS Enforcement    | All APIs must use HTTPS                      |
| CORS Headers         | Whitelist origins explicitly                 |

---

## 📘 4.3 API Documentation Standards

All APIs **must be documented before deployment**.

### Recommended Tools:
- Swagger / OpenAPI (REST)
- Postman Collections
- GraphQL Voyager / Docs Explorer
- Internal Notion/GitBook for business logic

### Required Sections:
- Authentication method
- Base URL
- All endpoints with:
  - Method (GET, POST...)
  - Path
  - Query/body parameters
  - Response schema (200/400/500)

---

## 🧪 4.4 API Testing

### ✅ Requirements:
- Unit tests for all endpoints (e.g., using Jest, Supertest)
- Contract tests to verify client-server agreement
- Postman test scripts for manual QA

### 🛠 Suggested Tools:
- REST: Postman, Hoppscotch, Supertest, Insomnia
- GraphQL: Apollo Sandbox, GraphiQL, Postman GraphQL

---

## 🤝 4.5 Integration Best Practices

| Rule                             | Description                                   |
|----------------------------------|-----------------------------------------------|
| Use environment variables        | Never hardcode URLs, tokens, or secrets       |
| Retry logic                      | Implement exponential backoff for failures    |
| Graceful degradation             | APIs must not crash on integration failure    |
| Circuit breakers (advanced)      | Isolate slow/broken services                  |
| Logging                          | All integrations must log failures with IDs   |

---

## 🛑 4.6 Anti-Patterns to Avoid

| ❌ Bad Practice                         | ✅ Recommended Alternative                   |
|----------------------------------------|---------------------------------------------|
| Using GET for updates                  | Use POST/PUT/PATCH                          |
| Silent failures (no error returned)    | Always return proper HTTP status codes      |
| Over-fetching with REST                | Use GraphQL with selective fields           |
| Hardcoded secrets in code              | Store secrets in `.env`, Vault, etc.        |
| One massive route file                 | Split routes by feature/module              |

---

## ✅ API Checklist (Pre-Merge or Release)

| ✅ | Task                                                         |
|----|--------------------------------------------------------------|
| ☐  | API paths are RESTful and consistent                         |
| ☐  | Versioning is implemented (`/api/v1/...`)                   |
| ☐  | Input validation added for all routes                       |
| ☐  | Swagger/Postman documentation created                       |
| ☐  | Authentication is enforced (JWT, API key, etc.)             |
| ☐  | Errors handled with proper messages & HTTP codes            |
| ☐  | Integration logic handles failures (retry, fallback, log)   |
| ☐  | Test cases cover positive and negative flows                |

---

