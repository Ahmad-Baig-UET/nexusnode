# Contributing to NexusNode

Welcome to the team. Please read this before writing any code.

---

## Branch Structure

| Branch | Purpose |
|--------|---------|
| `main` | Production only. Never commit here directly. |
| `develop` | Main integration branch. All work merges here. |
| `feature/name` | Your working branch for new features. |
| `fix/name` | For bug fixes. |
| `hotfix/name` | Critical production fixes only — branches off `main`. |

---

## Your Daily Workflow

### 1. Before you start — sync with develop
```bash
git checkout develop
git pull origin develop
```

### 2. Create your feature branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Work inside the correct folder

| You're working on... | Folder |
|----------------------|--------|
| Tracking script | `nexus-agent/` |
| REST APIs / Ingestion | `api/` |
| Background jobs / ETL | `workers/` |
| Frontend UI | `dashboard/` |
| Database schema / migrations | `db/` |

### 4. Save and push your work
```bash
git add .
git commit -m "short description of what you did"
git push origin feature/your-feature-name
```

### 5. Open a Pull Request
- Go to GitHub
- Open a Pull Request from your branch → `develop`
- Wait for review and approval before merging

---

## Rules

- ❌ Never push directly to `main` or `develop`
- ✅ One feature = one branch
- ✅ Keep commit messages clear and short
- ✅ Always pull latest `develop` before starting new work

---

## Folder Structure

```
/nexus-agent       # Client-side JS tracking sidecar
/api               # Node.js/Express — Ingestion & Dashboard APIs
/workers           # Anonymization, ETL & Aggregation workers
/dashboard         # Next.js frontend (Management & Buyer portal)
/db                # PostgreSQL schema, migrations, seeds
```
