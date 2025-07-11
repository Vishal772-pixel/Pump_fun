# 🗄️ SECTION 7: Database & Data Modeling Standards

> This section defines how databases should be structured, named, queried, and maintained across all projects at our agency — whether relational (SQL) or non-relational (NoSQL).

---

## 🎯 Purpose
To ensure our database layer is:
- 🧩 Modular and scalable
- 🔐 Secure and consistent
- 💡 Easy to understand, evolve, and query
- 📈 Optimized for performance and long-term growth

---

## 🧱 7.1 Database Types & When to Use

| Type    | Use For                                 | Examples                        |
|---------|------------------------------------------|---------------------------------|
| SQL     | Structured, relational data              | PostgreSQL, MySQL               |
| NoSQL   | Flexible schema, fast reads/writes       | MongoDB, Firebase, DynamoDB     |

> Default: Use **PostgreSQL** for most structured business logic. Use **MongoDB** for flexible or nested documents.

---

## 📐 7.2 Schema Design Best Practices (SQL)

| Principle                  | Practice Example                                      |
|----------------------------|-------------------------------------------------------|
| Use Singular Table Names   | `user`, `order`, not `users`, `orders`                |
| Normalize Until It Hurts  | Break data into relations (1NF/2NF/3NF)                |
| Use Foreign Keys          | Enforce relational integrity                          |
| Use UUIDs or INT PKs      | Choose globally unique or auto-increment IDs         |
| Add Timestamps            | Include `created_at`, `updated_at` in every table     |
| Index Smartly             | Index fields queried/filtered/sorted often            |

---

## 📊 7.3 Schema Design (NoSQL - MongoDB)

| Principle            | Practice                                                 |
|----------------------|----------------------------------------------------------|
| Keep Collections Flat| Avoid deep nesting (>2 levels)                          |
| Use Embedded Docs    | For tightly-coupled 1:1 or 1:n (e.g., user + profile)    |
| Use References       | For loosely-coupled relations (e.g., user ↔ orders)      |
| Timestamps & Audits  | Always add `createdAt`, `updatedAt`, `deletedAt`        |
| Avoid Overfetching   | Limit result sets, use pagination                       |

---

## 🧾 7.4 Naming Conventions

| Item             | Convention         | Example                     |
|------------------|--------------------|-----------------------------|
| Tables/Collections | snake_case (singular) | `user`, `product_category`    |
| Columns/Fields     | snake_case         | `first_name`, `total_price`   |
| Primary Key        | `id` or `user_id`  |                               |
| Foreign Key        | `<table>_id`       | `user_id`, `product_id`       |

---

## 🔐 7.5 Data Security & Privacy

| Rule                            | Practice                                             |
|----------------------------------|------------------------------------------------------|
| PII Separation                   | Don’t mix personal data in unrelated tables          |
| Data Encryption at Rest         | Use DB-native encryption or cloud KMS                |
| Data Masking                    | Mask data in lower environments                      |
| Soft Deletes                    | Use `deleted_at` timestamps, not actual deletes      |
| RBAC on Queries/Reports         | Don’t expose unrestricted access to raw DB           |

---

## 📦 7.6 Migration & Change Management

- Use schema migration tools: `Prisma`, `Knex`, `TypeORM`, `Flyway`
- Never alter tables manually in production
- Use versioned migration scripts
- Backup before every major schema change
- Store DB seeds separately

---

## 📈 7.7 Performance Optimization

| Area             | Tactic                                                       |
|------------------|---------------------------------------------------------------|
| Indexing         | Index fields used in joins, WHERE, ORDER BY                  |
| Pagination       | Use `LIMIT + OFFSET` or keyset pagination                    |
| Caching          | Use Redis or query caching for frequent reads                |
| Query Analysis   | Use `EXPLAIN ANALYZE` (SQL) or profiler tools (Mongo)        |
| Partitioning     | Use table partitioning or sharding for very large datasets   |

---

## ✅ Database Quality Checklist

| ✅ | Requirement                                                     |
|----|-----------------------------------------------------------------|
| ☐  | Tables use singular, snake_case naming                         |
| ☐  | All tables/collections include timestamps                      |
| ☐  | Keys and relations follow foreign key rules                    |
| ☐  | Sensitive data is encrypted and access-controlled             |
| ☐  | Test + staging DBs use masked data                            |
| ☐  | No manual schema changes in production                        |
| ☐  | DB queries are optimized and indexed properly                 |
| ☐  | Migration files are versioned and committed                   |

---

