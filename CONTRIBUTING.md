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


/nexus-agent       # Client-side JS tracking sidecar
/api               # Node.js/Express — Ingestion & Dashboard APIs
/workers           # Anonymization, ETL & Aggregation workers
/dashboard         # Next.js frontend (Management & Buyer portal)
/db                # PostgreSQL schema, migrations, seeds
```




nexusnode/
│
├── 📄 README.md               # Project overview for anyone opening the repo
├── 📄 CONTRIBUTING.md         # Rules for teammates — branching, workflow
│
├── 📁 nexus-agent/            # CLIENT SIDE — runs on customer websites
│   ├── agent.js               # Full tracking script (clicks, scrolls, views)
│   └── agent.min.js           # Minified version for production use
│
├── 📁 api/                    # SERVER SIDE — the backend brain
│   ├── server.js              # Entry point, starts Express server
│   ├── package.json           # Node dependencies list
│   ├── .env.example           # Environment variables template
│   ├── routes/
│   │   ├── ingest.js          # Receives events FROM nexus-agent
│   │   └── marketplace.js     # Serves data TO dashboard/buyers
│   ├── middleware/
│   │   └── auth.js            # JWT token checker — blocks unauthorized access
│   └── config/
│       └── db.js              # PostgreSQL connection setup
│
├── 📁 workers/                # BACKGROUND JOBS — run silently behind the scenes
│   ├── anonymization.js       # Removes personal data (IP, email) from events
│   ├── aggregation.js         # Counts and summarizes events by type/website
│   └── etl.js                 # Runs the full pipeline: anonymize → aggregate → save
│
├── 📁 dashboard/              # FRONTEND — what users see and click
│   ├── package.json           # Next.js dependencies
│   ├── pages/
│   │   ├── index.js           # Login / landing page
│   │   ├── analytics.js       # Business owner sees their data here
│   │   └── marketplace.js     # Buyers browse and purchase datasets here
│   └── components/
│       ├── Navbar.jsx         # Top navigation bar
│       └── Charts.jsx         # Data visualization components
│
└── 📁 db/                     # DATABASE — structure and data
    ├── schema.sql             # Defines all tables (users, events, websites)
    ├── migrations/
    │   └── 001_initial.sql    # Version 1 of the database setup
    └── seeds/
        └── test_data.sql      # Dummy data for testing during development
