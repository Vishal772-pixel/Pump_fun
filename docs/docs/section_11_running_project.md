# 🧪 SECTION 11: Running & Bootstrapping Projects

> This section outlines the standard procedure to clone, install, and run any web, app, or API-based project built under PixelSaffron.

---

## 📁 11.1 Folder Structure Overview

Typical project structure:

```
/project-root
├─ /config
├─ /controllers
├─ /routes
├─ /services
├─ /models
├─ /utils
├─ server.js
├─ .env.example
├─ Dockerfile
├─ docker-compose.yml
└─ package.json
```

---

## 🖥️ 11.2 Running Locally (Without Docker)

```bash
# 1. Clone the repository
git clone 
cd project-name

# 2. Install dependencies
npm install

# 3. Create .env file
cp .env.example .env
# Then update with your local values

# 4. Run the project
npx nodemon server.js
# OR
npm run dev
```

> Ensure `nodemon` is listed as a devDependency or globally installed.

---

## 🐳 11.3 Running with Docker

```bash
# 1. Clone the project
git clone
cd project-name

# 2. Setup environment file
cp .env.example .env

# 3. Build and run container
docker build -t primaryfolder/project-name .
docker run -p 3000:3000 --env-file .env pprimaryfolder/project-name

# OR use docker-compose (preferred)
docker-compose up --build
```

### Example Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
```

### Example docker-compose.yml
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    env_file:
      - .env
    volumes:
      - .:/app
    command: npm run dev
```

---

## 🛠️ 11.4 Preflight Setup Script (Optional but Recommended)

Create a setup file to automate bootstrapping:
```bash
bash setup.sh
# OR
node setup.js
```
It can:
- Install dependencies
- Copy `.env.example` to `.env`
- Run DB setup or migrations
- Start the server

---

## ❤️ 11.5 Health Check Endpoint

Every API or backend should expose:
```js
app.get('/healthz', (req, res) => res.status(200).send('OK'))
```
Use in:
- Docker healthcheck
- Uptime monitoring
- Load balancer probes

---

## 📦 11.6 API Testing Collection

Include one of the following:
- `postman_collection.json` in `/docs`
- `.http` file for VSCode/Insomnia

Makes QA and handover smoother.

---

## 🧾 11.7 Script Commands in package.json

Ensure the following are defined:
```json
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js",
  "test": "jest",
  "lint": "eslint ."
}
```
This allows consistent usage across all environments.

---

## 🔌 11.8 Port Configuration

Always use environment variables:
```js
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
```
This avoids hardcoding and makes Docker/multiple envs smoother.

---

## ✅ Run Environment Checklist

| ✅ | Requirement                          |
|----|--------------------------------------|
| ☐  | `.env.example` is present and accurate |
| ☐  | Project starts with `npm run dev` or `npx nodemon server.js` |
| ☐  | Dockerfile works and exposes correct port |
| ☐  | `docker-compose.yml` is available if needed |
| ☐  | `README.md` clearly explains all steps |
| ☐  | `healthz` endpoint available for monitoring |
| ☐  | Postman or `.http` collection is provided |
| ☐  | Scripts are standardized in `package.json` |

---

