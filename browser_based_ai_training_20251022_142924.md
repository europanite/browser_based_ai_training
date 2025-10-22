<!-- P2M_REPORT -->
<!-- GENERATED at 2025-10-22 14:29:24 -->
# Project Export: browser_based_ai_training

## Overview

- Root: `/home/skinner/browser_based_ai_training`
- Files: **43**
- Total size: **52163 bytes**
- Total LOC: 1450 | SLOC: 1234 | TODOs: 0

### Language mix
- javascript: 8
- plain: 7
- markdown: 7
- yaml: 6
- tsx: 5
- typescript: 4
- json: 3
- html: 2
- dockerfile: 1

### Top 12 largest files (bytes)
- `frontend/app/screens/HomeScreen.tsx` — 15574 bytes
- `LICENSE` — 11340 bytes
- `CODE_OF_CONDUCT.md` — 4085 bytes
- `.github/workflows/ci.yml` — 2297 bytes
- `frontend/app/components/SettingsBar.tsx` — 1656 bytes
- `.github/workflows/deploy-pages.yml` — 1184 bytes
- `SECURITY.md` — 1127 bytes
- `frontend/app/context/Auth.tsx` — 1001 bytes
- `frontend/app/App.tsx` — 991 bytes
- `docker-compose.yml` — 887 bytes
- `CONTRIBUTING.md` — 834 bytes
- `.github/workflows/docker.yml` — 788 bytes

### Top 12 longest files (LOC)
- `frontend/app/screens/HomeScreen.tsx` — 372 LOC
- `LICENSE` — 201 LOC
- `.github/workflows/ci.yml` — 78 LOC
- `CODE_OF_CONDUCT.md` — 68 LOC
- `.gitignore` — 58 LOC
- `frontend/app/components/SettingsBar.tsx` — 51 LOC
- `.github/workflows/deploy-pages.yml` — 47 LOC
- `frontend/app/.gitignore` — 37 LOC
- `SECURITY.md` — 37 LOC
- `frontend/app/context/Auth.tsx` — 35 LOC
- `.dockerignore` — 34 LOC
- `frontend/app/app.json` — 34 LOC

### Project tree (included subset)
```
browser_based_ai_training/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── deploy-pages.yml
│   │   └── docker.yml
│   ├── .env
│   └── pull_request_template.md
├── frontend/
│   ├── app/
│   │   ├── .expo/
│   │   │   ├── devices.json
│   │   │   └── README.md
│   │   ├── __mocks__/
│   │   │   ├── expoConstantsMock.js
│   │   │   ├── expoMock.js
│   │   │   ├── expoRouterMock.js
│   │   │   ├── fileMock.js
│   │   │   └── styleMock.js
│   │   ├── __tests__/
│   │   │   └── smoke.test.tsx
│   │   ├── components/
│   │   │   └── SettingsBar.tsx
│   │   ├── context/
│   │   │   └── Auth.tsx
│   │   ├── public/
│   │   │   ├── 404.html
│   │   │   └── google095bf08db4fb15d0.html
│   │   ├── screens/
│   │   │   └── HomeScreen.tsx
│   │   ├── types/
│   │   │   └── dom-augment.d.ts
│   │   ├── .gitignore
│   │   ├── app.json
│   │   ├── App.tsx
│   │   ├── babel.config.js
│   │   ├── index.ts
│   │   ├── jest.config.ts
│   │   ├── jest.setup.ts
│   │   ├── jest.setupFiles.js
│   │   ├── metro.config.js
│   │   └── tsconfig.json
│   ├── Dockerfile
│   └── Dockerfile.test
├── .dockerignore
├── .env
├── .gitignore
├── _config.yml
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── docker-compose.test.yml
├── docker-compose.yml
├── LICENSE
├── README.md
└── SECURITY.md
```

## Table of contents (files)

- 1. [.dockerignore](#.dockerignore)
- 2. [.env](#.env)
- 3. [.github/.env](#.github-.env)
- 4. [.github/ISSUE_TEMPLATE/bug_report.md](#.github-ISSUE_TEMPLATE-bug_report.md)
- 5. [.github/pull_request_template.md](#.github-pull_request_template.md)
- 6. [.github/workflows/ci.yml](#.github-workflows-ci.yml)
- 7. [.github/workflows/deploy-pages.yml](#.github-workflows-deploy-pages.yml)
- 8. [.github/workflows/docker.yml](#.github-workflows-docker.yml)
- 9. [.gitignore](#.gitignore)
- 10. [_config.yml](#_config.yml)
- 11. [CODE_OF_CONDUCT.md](#CODE_OF_CONDUCT.md)
- 12. [CONTRIBUTING.md](#CONTRIBUTING.md)
- 13. [docker-compose.test.yml](#docker-compose.test.yml)
- 14. [docker-compose.yml](#docker-compose.yml)
- 15. [frontend/app/.expo/devices.json](#frontend-app-.expo-devices.json)
- 16. [frontend/app/.expo/README.md](#frontend-app-.expo-README.md)
- 17. [frontend/app/.gitignore](#frontend-app-.gitignore)
- 18. [frontend/app/__mocks__/expoConstantsMock.js](#frontend-app-__mocks__-expoConstantsMock.js)
- 19. [frontend/app/__mocks__/expoMock.js](#frontend-app-__mocks__-expoMock.js)
- 20. [frontend/app/__mocks__/expoRouterMock.js](#frontend-app-__mocks__-expoRouterMock.js)
- 21. [frontend/app/__mocks__/fileMock.js](#frontend-app-__mocks__-fileMock.js)
- 22. [frontend/app/__mocks__/styleMock.js](#frontend-app-__mocks__-styleMock.js)
- 23. [frontend/app/__tests__/smoke.test.tsx](#frontend-app-__tests__-smoke.test.tsx)
- 24. [frontend/app/app.json](#frontend-app-app.json)
- 25. [frontend/app/App.tsx](#frontend-app-App.tsx)
- 26. [frontend/app/babel.config.js](#frontend-app-babel.config.js)
- 27. [frontend/app/components/SettingsBar.tsx](#frontend-app-components-SettingsBar.tsx)
- 28. [frontend/app/context/Auth.tsx](#frontend-app-context-Auth.tsx)
- 29. [frontend/app/index.ts](#frontend-app-index.ts)
- 30. [frontend/app/jest.config.ts](#frontend-app-jest.config.ts)
- 31. [frontend/app/jest.setup.ts](#frontend-app-jest.setup.ts)
- 32. [frontend/app/jest.setupFiles.js](#frontend-app-jest.setupFiles.js)
- 33. [frontend/app/metro.config.js](#frontend-app-metro.config.js)
- 34. [frontend/app/public/404.html](#frontend-app-public-404.html)
- 35. [frontend/app/public/google095bf08db4fb15d0.html](#frontend-app-public-google095bf08db4fb15d0.html)
- 36. [frontend/app/screens/HomeScreen.tsx](#frontend-app-screens-HomeScreen.tsx)
- 37. [frontend/app/tsconfig.json](#frontend-app-tsconfig.json)
- 38. [frontend/app/types/dom-augment.d.ts](#frontend-app-types-dom-augment.d.ts)
- 39. [frontend/Dockerfile](#frontend-Dockerfile)
- 40. [frontend/Dockerfile.test](#frontend-Dockerfile.test)
- 41. [LICENSE](#LICENSE)
- 42. [README.md](#README.md)
- 43. [SECURITY.md](#SECURITY.md)

---

## Files

<a id=".dockerignore"></a>
### 1. `.dockerignore`
- Size: 305 bytes | LOC: 34 | SLOC: 29 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: 4ddfad028bab

#### Brief
# Git
.git

#### Auto Summary
# Git

#### Content

```
# Git
.git
.gitignore

# Python cache
__pycache__/
*.py[cod]
*.pyo
*.pyd

# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env/config
.env
*.env
*.local

# OS / IDE
.DS_Store
Thumbs.db
desktop.ini
.vscode/
.idea/

# Build artifacts
dist/
build/
web-build/
.expo/
.expo-shared/
```

<a id=".env"></a>
### 2. `.env`
- Size: 230 bytes | LOC: 6 | SLOC: 6 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: ee13beb2355e

#### Brief
# Frontend (Expo)
EXPO_TUNNEL=false

#### Auto Summary
# Frontend (Expo)

#### Content

```
# Frontend (Expo)
EXPO_TUNNEL=false
EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
EXPO_PUBLIC_API_HOST=${REACT_NATIVE_PACKAGER_HOSTNAME}
EXPO_PUBLIC_API_PORT=8000
EXPO_PUBLIC_API_BASE=http://${EXPO_PUBLIC_API_HOST}:${EXPO_PUBLIC_API_PORT}
```

<a id=".github-.env"></a>
### 3. `.github/.env`
- Size: 230 bytes | LOC: 6 | SLOC: 6 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: ee13beb2355e

#### Brief
# Frontend (Expo)
EXPO_TUNNEL=false

#### Auto Summary
# Frontend (Expo)

#### Content

```
# Frontend (Expo)
EXPO_TUNNEL=false
EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0
EXPO_PUBLIC_API_HOST=${REACT_NATIVE_PACKAGER_HOSTNAME}
EXPO_PUBLIC_API_PORT=8000
EXPO_PUBLIC_API_BASE=http://${EXPO_PUBLIC_API_HOST}:${EXPO_PUBLIC_API_PORT}
```

<a id=".github-ISSUE_TEMPLATE-bug_report.md"></a>
### 4. `.github/ISSUE_TEMPLATE/bug_report.md`
- Size: 666 bytes | LOC: 30 | SLOC: 24 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: 4b4d2b96744a

#### Brief
---
name: Bug Report

#### Auto Summary
Description

#### Content (verbatim)

```markdown
---
name: Bug Report
about: Create a report to help us improve
title: "[Bug] "
labels: bug
assignees: ''
---

## Description
<!-- A clear and concise description of what the bug is -->

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
<!-- A clear and concise description of what you expected to happen -->

## Screenshots
<!-- If applicable, add screenshots to help explain your problem -->

## Environment
- OS: [e.g. Ubuntu 22.04]
- Browser/Version: [e.g. Chrome 117]
- Node/Python Version: [e.g. Node 18, Python 3.10]

## Additional Context
<!-- Add any other context about the problem here -->
```

<a id=".github-pull_request_template.md"></a>
### 5. `.github/pull_request_template.md`
- Size: 744 bytes | LOC: 27 | SLOC: 21 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: 1b6e1aab4d9a

#### Brief
# Pull Request

#### Auto Summary
Pull Request

#### Content (verbatim)

```markdown
# Pull Request

## Overview
<!-- Briefly describe the purpose of this PR and the problem it solves   -->

## Changes
<!-- List the main changes made in this PR -->
- 

## Testing
<!-- Describe how you tested the changes -->
- [ ] Built and ran locally without errors
- [ ] All tests passed
- [ ] Verified functionality manually (describe how)

## Related Issues
<!-- Link to related issues if applicable -->
- Closes #

## Checklist
- [ ] Code is clean and free of unnecessary comments/debug prints
- [ ] Proper naming conventions and documentation are followed
- [ ] Updated documentation/README if necessary
- [ ] CI pipeline passes successfully

## Notes for Reviewers
<!-- Additional context or things reviewers should pay attention to -->
```

<a id=".github-workflows-ci.yml"></a>
### 6. `.github/workflows/ci.yml`
- Size: 2297 bytes | LOC: 78 | SLOC: 78 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: 7309587210ac

#### Brief
name: CI
on:

#### Auto Summary
name: CI

#### Content

```yaml
name: CI
on:
  push:
  pull_request:
concurrency:
  group: frontend-ci-${{ github.ref }}
  cancel-in-progress: true
permissions:
  contents: read
jobs:
  test:
    name: Jest on Node ${{ matrix.node }}
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node: [18, 20, 22]
    env:
      CI: "1"
      EXPO_TUNNEL: "false"
      EXPO_DEVTOOLS_LISTEN_ADDRESS: 0.0.0.0
      EXPO_PUBLIC_API_BASE: http://localhost:8000
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Use Node ${{ matrix.node }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
          cache: npm
          cache-dependency-path: frontend/app/package-lock.json
      - name: Install deps
        working-directory: frontend/app
        run: npm ci
      - name: Type check (skip if no TS)
        if: hashFiles('frontend/app/tsconfig.json') != ''
        working-directory: frontend/app
        run: |
          npx --yes typescript@latest -v >/dev/null 2>&1 || true
          npx tsc --noEmit || (echo "::warning::Type check failed"; exit 1)
      - name: Run Jest with coverage (CI mode)
        working-directory: frontend/app
        run: npm test -- --ci --runInBand --coverage --verbose
      - name: Upload coverage
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: coverage-node${{ matrix.node }}
          path: frontend/app/coverage
          if-no-files-found: warn
  web-export-smoke:
    name: Expo web export (smoke)
    needs: test
    runs-on: ubuntu-latest
    env:
      CI: "1"
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Use Node 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: frontend/app/package-lock.json
      - name: Install deps
        working-directory: frontend/app
        run: npm ci
      - name: Build (expo export -p web)
        working-directory: frontend/app
        run: npx expo export -p web
      - name: Upload dist (preview artifact)
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: expo-web-dist
          path: frontend/app/dist
          if-no-files-found: error
```

<a id=".github-workflows-deploy-pages.yml"></a>
### 7. `.github/workflows/deploy-pages.yml`
- Size: 1184 bytes | LOC: 47 | SLOC: 47 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: 7b4f25958db5

#### Brief
name: GitHub Pages
on:

#### Auto Summary
name: GitHub Pages

#### Content

```yaml
name: GitHub Pages
on:
  push:
    branches: [ "main" ]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: true
jobs:
  build:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Use Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: |
            frontend/app/package-lock.json
      - name: Install deps
        working-directory: frontend/app
        run: npm ci
      - name: Build (expo export -p web)
        working-directory: frontend/app
        run: npx expo export -p web
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: frontend/app/dist
  deploy:
    if: github.ref == 'refs/heads/main'
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

<a id=".github-workflows-docker.yml"></a>
### 8. `.github/workflows/docker.yml`
- Size: 788 bytes | LOC: 27 | SLOC: 27 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: 4e513684a5b1

#### Brief
name: docker
on:

#### Auto Summary
name: docker

#### Content

```yaml
name: docker
on:
  workflow_dispatch:
  pull_request:
jobs:
  docker-tests:
    runs-on: ubuntu-latest
    env:
      CI: "1"
      EXPO_TUNNEL: "false"
      EXPO_DEVTOOLS_LISTEN_ADDRESS: 0.0.0.0
      EXPO_PUBLIC_API_BASE: http://localhost:8000
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      - name: Run tests via docker-compose (deterministic CI)
        run: |
          docker compose -f docker-compose.test.yml up --build --exit-code-from frontend_test
      - name: Upload test reports (if mounted)
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: frontend-reports
          path: reports/frontend
          if-no-files-found: warn
```

<a id=".gitignore"></a>
### 9. `.gitignore`
- Size: 585 bytes | LOC: 58 | SLOC: 49 | TODOs: 0 | Modified: 2025-10-22 11:44:15 | SHA1: 7b43f8e8f583

#### Brief
# Python
__pycache__/

#### Auto Summary
# Python

#### Content

```
# Python
__pycache__/
*.py[cod]
*.pyo
*.pyd
*.so
*.egg
*.egg-info/
.eggs/
*.log
*.sqlite3
db.sqlite3

# Virtual env
.venv/
env/
venv/
ENV/

# Jupyter
.ipynb_checkpoints/

# Node / React Native (Expo)
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.expo/
.expo-shared/
web-build/
dist/
build/

# macOS / Linux / Windows
.DS_Store
Thumbs.db
desktop.ini

# IDE
.vscode/
.idea/
*.swp

# Docker
*.pid
*.sock
*.tar

# coverage reports (backend & frontend)
coverage/
backend/app/coverage/
frontend/app/coverage/

# Jest cache
frontend/app/.jest-cache/

make_md.py
python_front_*
```

<a id="_config.yml"></a>
### 10. `_config.yml`
- Size: 258 bytes | LOC: 10 | SLOC: 10 | TODOs: 0 | Modified: 2025-10-22 11:08:19 | SHA1: 3fa2b10bd429

#### Brief
title: "browser_based_ai_training"
description: "A Browser-Based AI Training Playground"

#### Auto Summary
title: "browser_based_ai_training"

#### Content

```yaml
title: "browser_based_ai_training"
description: "A Browser-Based AI Training Playground"
baseurl: "/browser_based_ai_training"
url: "https://europanite.github.io"
theme: minima
markdown: kramdown
plugins:
  - jekyll-feed
  - jekyll-sitemap
highlighter: rouge
```

<a id="CODE_OF_CONDUCT.md"></a>
### 11. `CODE_OF_CONDUCT.md`
- Size: 4085 bytes | LOC: 68 | SLOC: 50 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 724cc33f0dca

#### Brief
# Contributor Covenant Code of Conduct

#### Auto Summary
Contributor Covenant Code of Conduct

#### Content (verbatim)

```markdown
# Contributor Covenant Code of Conduct

## Our Pledge
We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards
Examples of behavior that contributes to a positive environment include:
- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Taking responsibility and apologizing to those affected by our mistakes
- Focusing on what is best for the community, not just for ourselves

Examples of unacceptable behavior include:
- The use of sexualized language or imagery, and sexual attention or advances
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others’ private information without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement Responsibilities
Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

## Scope
This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public spaces.

## Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the maintainers of this project. All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the reporter of any incident.

## Enforcement Guidelines
Community leaders will follow these guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:

1. **Correction**  
- *Impact*: Use of inappropriate language or other behavior deemed unprofessional.  
- *Consequence*: A private, written warning, with clarity around the nature of the violation and an explanation of why the behavior was inappropriate.

2. **Warning**  
- *Impact*: A violation through a single incident or series of actions.  
- *Consequence*: A warning with consequences for continued behavior. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time.

3. **Temporary Ban**  
- *Impact*: A serious violation of community standards, including sustained inappropriate behavior.  
- *Consequence*: A temporary ban from any sort of interaction or public communication with the community for a specified period of time.

4. **Permanent Ban**  
- *Impact*: Demonstrating a pattern of violation of community standards, including sustained inappropriate behavior, harassment of an individual, or aggression toward or disparagement of classes of individuals.  
- *Consequence*: A permanent ban from any sort of public interaction within the
   community.

## Attribution

This Code of Conduct is adapted from the  
- [Contributor Covenant][v2.1], version 2.1, available at [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

Community Impact Guidelines were inspired by  
- [Mozilla’s code of conduct enforcement ladder][mozilla-coc].

For answers to common questions about this code of conduct, see the FAQ at  
- [Contributor Covenant FAQ][faq].

[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
[mozilla-coc]: https://github.com/mozilla/diversity
[faq]: https://www.contributor-covenant.org/faq
```

<a id="CONTRIBUTING.md"></a>
### 12. `CONTRIBUTING.md`
- Size: 834 bytes | LOC: 25 | SLOC: 19 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 12ea21d94090

#### Brief
# Contributing Guidelines

#### Auto Summary
Contributing Guidelines

#### Content (verbatim)

```markdown
# Contributing Guidelines

Thank you for considering contributing to this project!  
We welcome bug reports, feature requests, and pull requests.  
Please follow the guidelines below to make the process smooth for everyone.

---

## How to Contribute

### 1. Reporting Issues
- Check the [issue tracker](../../issues) to avoid duplicates.
- Use the appropriate [issue template](.github/ISSUE_TEMPLATE/) when creating a new issue.
- Provide as much detail as possible (steps to reproduce, expected behavior, environment, etc.).

### 2. Suggesting Features
- Open a new **Feature Request** issue.
- Explain the problem your idea solves.
- Provide examples, use cases, or references if possible.

### 3. Submitting Pull Requests
Fork the repository and create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
```

<a id="docker-compose.test.yml"></a>
### 13. `docker-compose.test.yml`
- Size: 706 bytes | LOC: 21 | SLOC: 21 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: ae51e77ed333

#### Brief
services:
  frontend_test:

#### Auto Summary
services:

#### Content

```yaml
services:
  frontend_test:
    container_name: frontend_test
    build:
      context: ./frontend
      dockerfile: Dockerfile.test
    working_dir: /app
    environment:
      CI: "1"
      EXPO_TUNNEL: ${EXPO_TUNNEL}
      EXPO_DEVTOOLS_LISTEN_ADDRESS: ${EXPO_DEVTOOLS_LISTEN_ADDRESS}
      REACT_NATIVE_PACKAGER_HOSTNAME: ${REACT_NATIVE_PACKAGER_HOSTNAME}
      EXPO_PUBLIC_API_HOST: ${EXPO_PUBLIC_API_HOST}
      EXPO_PUBLIC_API_PORT: ${EXPO_PUBLIC_API_PORT}
      EXPO_PUBLIC_API_BASE: ${EXPO_PUBLIC_API_BASE}
    volumes:
      - ./frontend/app:/app
      - /app/node_modules
      - ./reports/frontend:/reports/frontend
    command: >-
      sh -lc "npm ci && npm test -- --ci --runInBand --verbose"
```

<a id="docker-compose.yml"></a>
### 14. `docker-compose.yml`
- Size: 887 bytes | LOC: 30 | SLOC: 30 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 6798f1d1af83

#### Brief
services:
  frontend:

#### Auto Summary
services:

#### Content

```yaml
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: frontend
    working_dir: /app
    stdin_open: true
    tty: true
    restart: unless-stopped
    volumes:
      - ./frontend/app:/app
      - /app/node_modules
    environment:
      EXPO_TUNNEL: ${EXPO_TUNNEL}
      EXPO_DEVTOOLS_LISTEN_ADDRESS: ${EXPO_DEVTOOLS_LISTEN_ADDRESS}
      REACT_NATIVE_PACKAGER_HOSTNAME: ${REACT_NATIVE_PACKAGER_HOSTNAME}
      EXPO_PUBLIC_API_HOST: ${EXPO_PUBLIC_API_HOST}
      EXPO_PUBLIC_API_PORT: ${EXPO_PUBLIC_API_PORT}
      EXPO_PUBLIC_API_BASE: ${EXPO_PUBLIC_API_BASE}
    ports:
      - "19000:19000"  # Expo dev server (Metro)
      - "19001:19001"  # React Native debugger(old)
      - "19002:19002"  # Expo web UI
      - "8081:8081"    # Metro bundler
    command: >
      sh -c "
        npm install &&
        npx expo start
      "
```

<a id="frontend-app-.expo-devices.json"></a>
### 15. `frontend/app/.expo/devices.json`
- Size: 20 bytes | LOC: 3 | SLOC: 3 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: e65a108cbb97

#### Brief
{
  "devices": []

#### Auto Summary
{

#### Content

```json
{
  "devices": []
}
```

<a id="frontend-app-.expo-README.md"></a>
### 16. `frontend/app/.expo/README.md`
- Size: 756 bytes | LOC: 13 | SLOC: 8 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 4cc074eb3727

#### Brief
> Why do I have a folder named ".expo" in my project?

#### Auto Summary
> Why do I have a folder named ".expo" in my project?

#### Content (verbatim)

```markdown
> Why do I have a folder named ".expo" in my project?

The ".expo" folder is created when an Expo project is started using "expo start" command.

> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
```

<a id="frontend-app-.gitignore"></a>
### 17. `frontend/app/.gitignore`
- Size: 398 bytes | LOC: 37 | SLOC: 29 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 87b612309282

#### Brief
# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

#### Auto Summary
# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

#### Content

```
# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/
expo-env.d.ts

# Native
.kotlin/
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo
```

<a id="frontend-app-__mocks__-expoConstantsMock.js"></a>
### 18. `frontend/app/__mocks__/expoConstantsMock.js`
- Size: 97 bytes | LOC: 3 | SLOC: 3 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 042b2b318b7a

#### Brief
module.exports = {
  default: { expoConfig: {}, manifest: null, appOwnership: 'standalone' },

#### Auto Summary
module.exports = {

#### Content

```javascript
module.exports = {
  default: { expoConfig: {}, manifest: null, appOwnership: 'standalone' },
};
```

<a id="frontend-app-__mocks__-expoMock.js"></a>
### 19. `frontend/app/__mocks__/expoMock.js`
- Size: 174 bytes | LOC: 7 | SLOC: 7 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: d58b65ebbe06

#### Brief
const dummy = new Proxy({}, { get: () => undefined });
module.exports = {

#### Auto Summary
const dummy = new Proxy({}, { get: () => undefined });

#### Content

```javascript
const dummy = new Proxy({}, { get: () => undefined });
module.exports = {
  ...dummy,
  registerRootComponent: () => {},
  installExpoGlobals: () => {},
  default: dummy,
};
```

<a id="frontend-app-__mocks__-expoRouterMock.js"></a>
### 20. `frontend/app/__mocks__/expoRouterMock.js`
- Size: 179 bytes | LOC: 7 | SLOC: 7 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: bec4abda4523

#### Brief
module.exports = {
  useRouter: () => ({ push: () => {}, replace: () => {}, back: () => {} }),

#### Auto Summary
module.exports = {

#### Content

```javascript
module.exports = {
  useRouter: () => ({ push: () => {}, replace: () => {}, back: () => {} }),
  useSegments: () => [],
  Slot: () => null,
  Stack: () => null,
  default: {},
};
```

<a id="frontend-app-__mocks__-fileMock.js"></a>
### 21. `frontend/app/__mocks__/fileMock.js`
- Size: 35 bytes | LOC: 1 | SLOC: 1 | TODOs: 0 | Modified: 2025-10-22 13:50:12 | SHA1: 5df5c6eaa324

#### Brief
module.exports = 'test-file-stub';

#### Auto Summary
module.exports = 'test-file-stub';

#### Content

```javascript
module.exports = 'test-file-stub';
```

<a id="frontend-app-__mocks__-styleMock.js"></a>
### 22. `frontend/app/__mocks__/styleMock.js`
- Size: 21 bytes | LOC: 1 | SLOC: 1 | TODOs: 0 | Modified: 2025-10-22 13:50:28 | SHA1: 6d71154c41bc

#### Brief
module.exports = {};

#### Auto Summary
module.exports = {};

#### Content

```javascript
module.exports = {};
```

<a id="frontend-app-__tests__-smoke.test.tsx"></a>
### 23. `frontend/app/__tests__/smoke.test.tsx`
- Size: 288 bytes | LOC: 10 | SLOC: 8 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 29a77aa1510f

#### Brief
import React from 'react';
import { Text } from 'react-native';

#### Auto Summary
import React from 'react';

#### Content

```tsx
import React from 'react';
import { Text } from 'react-native';
import { render, screen } from '@testing-library/react-native';

function Hello(){ return <Text testID="hi">hi</Text>; }

test('smoke', async () => {
  render(<Hello />);
  expect(screen.getByTestId('hi')).toBeTruthy();
});
```

<a id="frontend-app-app.json"></a>
### 24. `frontend/app/app.json`
- Size: 758 bytes | LOC: 34 | SLOC: 34 | TODOs: 0 | Modified: 2025-10-22 11:07:23 | SHA1: ef621ef2fbd7

#### Brief
{
  "expo": {

#### Auto Summary
{

#### Content

```json
{
  "expo": {
    "name": "app",
    "slug": "app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true
    },
    "experiments": {
      "baseUrl": "/browser_based_ai_training"
    },
    "web": {
      "favicon": "./assets/favicon.png",
      "output": "single",
      "bundler": "metro"
    }
  }
}
```

<a id="frontend-app-App.tsx"></a>
### 25. `frontend/app/App.tsx`
- Size: 991 bytes | LOC: 30 | SLOC: 27 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: c327cd2f2101

#### Brief
import React from "react";
import { View } from "react-native";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "./context/Auth";
import SettingsBar from "./components/SettingsBar";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AuthProvider>
        <NavigationContainer>
          <SettingsBar />
          <View style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
```

<a id="frontend-app-babel.config.js"></a>
### 26. `frontend/app/babel.config.js`
- Size: 108 bytes | LOC: 6 | SLOC: 6 | TODOs: 0 | Modified: 2025-10-22 14:11:05 | SHA1: 884d8f7341ac

#### Brief
module.exports = function (api) {
  api.cache(true);

#### Auto Summary
module.exports = function (api) {

#### Content

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

<a id="frontend-app-components-SettingsBar.tsx"></a>
### 27. `frontend/app/components/SettingsBar.tsx`
- Size: 1656 bytes | LOC: 51 | SLOC: 47 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 923ce657afe8

#### Brief
import React from "react";
import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";

#### Auto Summary
import React from "react";

#### Content

```tsx
import React from "react";
import { View, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../context/Auth";
import { useNavigation } from "@react-navigation/native";

const BAR_BG = "#000000ff";
const CONTENT_MAX_W = 480; // ← same as forms

export default function SettingsBar() {
  const nav = useNavigation<any>();
  const { width } = useWindowDimensions();
  const isNarrow = width < 420; // stack buttons below on very small widths

  const Btn = ({ title, onPress }: { title: string; onPress: () => void }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#fff",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        borderWidth: 1,
      }}
    >
      <Text style={{ fontWeight: "600" }}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: BAR_BG }}>
      <StatusBar style="dark" backgroundColor={BAR_BG} />
      <View style={{ backgroundColor: BAR_BG, paddingHorizontal: 12, paddingVertical: 10 }}>
        <View style={{ alignItems: "center" }}>
          <View style={{ width: "100%", maxWidth: CONTENT_MAX_W, gap: 8 }}>
            <View
              style={{
                flexDirection: isNarrow ? "column" : "row",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
```

<a id="frontend-app-context-Auth.tsx"></a>
### 28. `frontend/app/context/Auth.tsx`
- Size: 1001 bytes | LOC: 35 | SLOC: 25 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 8a2139845413

#### Brief
Simple auth context that stores token/email in memory.
You can later persist it with AsyncStorage if needed.

#### Auto Summary
// Simple auth context that stores token/email in memory.

#### Content

```tsx
// Simple auth context that stores token/email in memory.
// You can later persist it with AsyncStorage if needed.
import React, { createContext, useContext, useState, ReactNode } from "react";

type User = { email: string } | null;

type AuthCtx = {
  user: User;
  token: string | null;
  authHeader: () => Partial<Record<string, string>>;
};

const AuthContext = createContext<AuthCtx | null>(null);

const API_BASE = process.env.EXPO_PUBLIC_API_BASE!;

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User>(null);

  const authHeader = () =>
    token ? { Authorization: `Bearer ${token}` } : {};

  return (
    <AuthContext.Provider value={{ user, token, authHeader }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
```

<a id="frontend-app-index.ts"></a>
### 29. `frontend/app/index.ts`
- Size: 307 bytes | LOC: 8 | SLOC: 3 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: fd1e69b3b668

#### Brief
import { registerRootComponent } from 'expo';

#### Auto Summary
import { registerRootComponent } from 'expo';

#### Content

```typescript
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
```

<a id="frontend-app-jest.config.ts"></a>
### 30. `frontend/app/jest.config.ts`
- Size: 742 bytes | LOC: 24 | SLOC: 24 | TODOs: 0 | Modified: 2025-10-22 14:28:08 | SHA1: 46bcf0160b99

#### Brief
module.exports = {
   preset: 'jest-expo',

#### Auto Summary
module.exports = {

#### Content

```typescript
 module.exports = {
   preset: 'jest-expo',
   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
     '\\.(png|jpe?g|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
     '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
     'react-native-reanimated': 'react-native-reanimated/mock'
   },
   transformIgnorePatterns: [
     'node_modules/(?!(react-native'
       + '|@react-native'
       + '|react-clone-referenced-element'
       + '|@react-navigation'
       + '|react-navigation'
       + '|expo(nent)?'
       + '|@expo(nent)?/.*'
       + '|expo-modules-core'
       + '|expo-.*'
       + '|@expo/.*'
       + '|@react-native/polyfills'
     + ')/)',
   ],
   testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
 };
```

<a id="frontend-app-jest.setup.ts"></a>
### 31. `frontend/app/jest.setup.ts`
- Size: 88 bytes | LOC: 2 | SLOC: 2 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: f764402eb556

#### Brief
import '@testing-library/jest-native/extend-expect';
import '@testing-library/jest-dom';

#### Auto Summary
import '@testing-library/jest-native/extend-expect';

#### Content

```typescript
import '@testing-library/jest-native/extend-expect';
import '@testing-library/jest-dom';
```

<a id="frontend-app-jest.setupFiles.js"></a>
### 32. `frontend/app/jest.setupFiles.js`
- Size: 395 bytes | LOC: 9 | SLOC: 8 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 8572a798e340

#### Brief
if (!Object.getOwnPropertyDescriptor(globalThis, '__ExpoImportMetaRegistry')) {
  Object.defineProperty(globalThis, '__ExpoImportMetaRegistry', {

#### Auto Summary
if (!Object.getOwnPropertyDescriptor(globalThis, '__ExpoImportMetaRegistry')) {

#### Content

```javascript
if (!Object.getOwnPropertyDescriptor(globalThis, '__ExpoImportMetaRegistry')) {
  Object.defineProperty(globalThis, '__ExpoImportMetaRegistry', {
    configurable: true,
    value: { get: () => null, has: () => false },
  });
}

jest.mock('@react-native/animated', () => ({}), { virtual: true });
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({}), { virtual: true });
```

<a id="frontend-app-metro.config.js"></a>
### 33. `frontend/app/metro.config.js`
- Size: 128 bytes | LOC: 3 | SLOC: 3 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 2c699d1e4a93

#### Brief
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

#### Auto Summary
const { getDefaultConfig } = require('expo/metro-config');

#### Content

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
module.exports = config;
```

<a id="frontend-app-public-404.html"></a>
### 34. `frontend/app/public/404.html`
- Size: 490 bytes | LOC: 12 | SLOC: 12 | TODOs: 0 | Modified: 2025-10-22 11:07:40 | SHA1: d4548bb32bc9

#### Brief
<!DOCTYPE html><html><head>
  <meta charset="utf-8"><title>Redirecting...</title>

#### Auto Summary
<!DOCTYPE html><html><head>

#### Content

```html
<!DOCTYPE html><html><head>
  <meta charset="utf-8"><title>Redirecting...</title>
  <script>
    (function(){
      var path = window.location.pathname.replace(/\/browser_based_ai_training/, '');
      var search = window.location.search || '';
      var hash = window.location.hash || '';
      var url = '/browser_based_ai_training/?redirect=' + encodeURIComponent(path + search + hash);
      window.location.replace(url);
    })();
  </script>
</head><body>Redirecting...</body></html>
```

<a id="frontend-app-public-google095bf08db4fb15d0.html"></a>
### 35. `frontend/app/public/google095bf08db4fb15d0.html`
- Size: 53 bytes | LOC: 1 | SLOC: 1 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 6d7f2ccca405

#### Brief
google-site-verification: google095bf08db4fb15d0.html

#### Auto Summary
google-site-verification: google095bf08db4fb15d0.html

#### Content

```html
google-site-verification: google095bf08db4fb15d0.html
```

<a id="frontend-app-screens-HomeScreen.tsx"></a>
### 36. `frontend/app/screens/HomeScreen.tsx`
- Size: 15574 bytes | LOC: 372 | SLOC: 310 | TODOs: 0 | Modified: 2025-10-22 14:19:19 | SHA1: bea6371a2850

#### Brief
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Linking } from "react-native";

#### Auto Summary
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

#### Content

```tsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Linking } from "react-native";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knn from "@tensorflow-models/knn-classifier";

// ---------------------------------------------------------------------------
// Helpers (web-only pieces kept minimal and guarded)
// ---------------------------------------------------------------------------
const isWeb = typeof document !== "undefined";

type Pred = { label: string; confidences: Record<string, number> } | null;

function logTime() {
  const d = new Date();
  return [d.getHours().toString().padStart(2, "0"), d.getMinutes().toString().padStart(2, "0"), d.getSeconds().toString().padStart(2, "0")].join(":");
}

async function fileToImage(file: File): Promise<HTMLImageElement> {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;
  await new Promise((res, rej) => {
    img.onload = () => res(null);
    img.onerror = rej;
  });
  return img; // caller keeps the objectURL alive for previews
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <Text style={{ fontWeight: "700", fontSize: 18, marginBottom: 8 }}>{children}</Text>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ backgroundColor: "#eef2ff", borderColor: "#c7d2fe", borderWidth: 1, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999 }}>
      <Text style={{ fontSize: 12, fontWeight: "600" }}>{children}</Text>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export default function HomeScreen() {
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [net, setNet] = useState<mobilenet.MobileNet | null>(null);
  const clfRef = useRef<knn.KNNClassifier | null>(null);
  const [classCounts, setClassCounts] = useState<Record<string, number>>({});

  // Imported-but-not-yet-learned files
  const [pendingFiles, setPendingFiles] = useState<Array<{ file: File; label: string; uri: string }>>([]);

  // Previews (shows imported images regardless of learned or not)
  const [trainPreviews, setTrainPreviews] = useState<Array<{ uri: string; label: string }>>([]);

  // Test image & prediction
  const [testPreview, setTestPreview] = useState<string | null>(null);
  const [testFile, setTestFile] = useState<File | null>(null);
  const [pred, setPred] = useState<Pred>(null);

  const pushMsg = useCallback((s: string) => setMessages((m) => [`[${logTime()}] ${s}`, ...m].slice(0, 200)), []);

  useEffect(() => {
    (async () => {
      try {
        setLoading("Preparing TensorFlow.js backend...");
        if (tf.getBackend() !== "webgl" && (tf as any).engine?.registryFactory?.["webgl"]) {
          await tf.setBackend("webgl");
        }
        await tf.ready();
        pushMsg(`TFJS backend: ${tf.getBackend()}`);
        setLoading("Loading MobileNet (feature extractor)...");
        const model = await mobilenet.load({ version: 2, alpha: 1.0 });
        setNet(model);
        clfRef.current = knn.create();
        setReady(true);
        setLoading(null);
        pushMsg("Ready. Import a folder structured as /<label>/<image>. Then click Learn and Predict.");
      } catch (e: any) {
        setLoading(null);
        pushMsg(`[ERROR] ${e?.message || e}`);
      }
    })();
  }, [pushMsg]);

  // -------------------------------------------------------------------------
  // Folder Import: root/.../<label>/<image>
  // -------------------------------------------------------------------------
  const onAddFolder = useCallback(async (files: FileList | null) => {
    if (!files) return;
    setLoading("Scanning folder...");

    const newPending: Array<{ file: File; label: string; uri: string }> = [];
    const previews: Array<{ uri: string; label: string }> = [];
    let added = 0;

    try {
      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        if (!(f.type && f.type.startsWith("image/"))) continue;
        const rel = (f as any).webkitRelativePath || f.name; // e.g., animals/cat/img1.jpg or img1.jpg
        const parts = rel.split("/").filter(Boolean);
        // Use the parent folder name as class label: .../<label>/<file>
        const label = parts.length >= 2 ? parts[parts.length - 2] : "root";

        const uri = URL.createObjectURL(f);
        newPending.push({ file: f, label, uri });
        previews.push({ uri, label });
        added++;
      }

      if (added === 0) {
        pushMsg("No images found in the selected folder.");
      } else {
        setPendingFiles((prev) => [...newPending, ...prev]);
        setTrainPreviews((prev) => [...previews, ...prev].slice(0, 200));
        pushMsg(`Imported ${added} image(s) pending for learning.`);
      }
    } catch (e: any) {
      pushMsg(`[ERROR] folder import: ${e?.message || e}`);
    } finally {
      setLoading(null);
    }
  }, [pushMsg]);

  // -------------------------------------------------------------------------
  // Learn (process pendingFiles into KNN using MobileNet features)
  // -------------------------------------------------------------------------
  const onLearn = useCallback(async () => {
    if (!net || !clfRef.current) return pushMsg("Model not ready yet");
    if (pendingFiles.length === 0) return pushMsg("No pending images to learn.");

    setLoading(`Learning ${pendingFiles.length} image(s)...`);
    try {
      // Add examples in small batches to keep UI responsive
      const BATCH = 24;
      for (let i = 0; i < pendingFiles.length; i++) {
        const { file, label } = pendingFiles[i];
        const img = await fileToImage(file);
        const logits = tf.tidy(() => net.infer(img, true) as tf.Tensor);
        clfRef.current.addExample(logits, label);
        logits.dispose();
        if (i % BATCH === 0) await tf.nextFrame();
      }
      const counts = clfRef.current.getClassExampleCount();
      setClassCounts(counts as any);
      pushMsg(`Learned. Classes: ${Object.keys(counts).join(", ") || "(none)"}`);
      setPendingFiles([]);
    } catch (e: any) {
      pushMsg(`[ERROR] learn: ${e?.message || e}`);
    } finally {
      setLoading(null);
    }
  }, [net, pendingFiles, pushMsg]);

  // -------------------------------------------------------------------------
  // Test image selection & Predict button
  // -------------------------------------------------------------------------
  const onSelectTest = useCallback(async (file: File | null) => {
    setPred(null);
    setTestFile(file);
    if (file) setTestPreview(URL.createObjectURL(file));
    else setTestPreview(null);
  }, []);

  const onPredictBtn = useCallback(async () => {
    if (!testFile) return pushMsg("Pick a test image first.");
    if (!net || !clfRef.current) return pushMsg("Model not ready yet");
    if (Object.keys(clfRef.current.getClassExampleCount()).length === 0) {
      return pushMsg("No classes yet. Click Learn after importing a folder.");
    }
    setLoading("Running inference...");
    setPred(null);
    try {
      const img = await fileToImage(testFile);
      const logits = tf.tidy(() => net.infer(img, true) as tf.Tensor);
      const res = await clfRef.current.predictClass(logits, 5);
      logits.dispose();
      setPred({ label: res.label, confidences: (res.confidences as any) || {} });
      pushMsg(`Prediction: ${res.label}`);
    } catch (e: any) {
      pushMsg(`[ERROR] predict: ${e?.message || e}`);
    } finally {
      setLoading(null);
    }
  }, [net, testFile, pushMsg]);

  const onClear = useCallback(() => {
    clfRef.current = knn.create();
    setClassCounts({});
    setPendingFiles([]);
    setTrainPreviews([]);
    setTestPreview(null);
    setTestFile(null);
    setPred(null);
    pushMsg("Cleared classifier, pending files, and previews.");
  }, [pushMsg]);

  const REPO_URL = "https://github.com/europanite/browser_based_ai_training";

  // -------------------------------------------------------------------------
  // UI helpers
  // -------------------------------------------------------------------------
  const FilePickFolder = () => {
    if (!isWeb) return null as any;
    return (
      // @ts-ignore – directory upload attributes (supported on Chromium-based browsers & Safari)
      <input
        type="file"
        /* Non-standard directory selection (Chromium/Safari/Firefox) */
        webkitdirectory
        mozdirectory
        directory
        style={{ marginRight: 8, marginTop: 4, marginBottom: 4 }}
        onChange={(e: any) => onAddFolder(e.target.files as FileList)}
      />
    );
  };

  const FilePickTest = () => {
    if (!isWeb) return null as any;
    return (
      // @ts-ignore
      <input
        type="file"
        accept="image/*"
        style={{ marginRight: 8, marginTop: 4, marginBottom: 4 }}
        onChange={(e: any) => onSelectTest((e.target.files as FileList)?.[0] || null)}
      />
    );
  };

  const ClassCountBadges = useMemo(() => {
    const entries = Object.entries(classCounts);
    if (entries.length === 0) return <Text style={{ color: "#666" }}>(No learned examples yet)</Text>;
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
        {entries.map(([label, n]) => (
          <Pill key={label}>{label}: {n}</Pill>
        ))}
      </View>
    );
  }, [classCounts]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8fafc" }} contentContainerStyle={{ padding: 16 }}>


      <TouchableOpacity onPress={() => Linking.openURL(REPO_URL)}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "800",
            marginBottom: 12,
            color: "#1d4ed8",
            textDecorationLine: "underline",
          }}
        >
          Browser Based AI Training
        </Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 16, padding: 12, borderRadius: 12, borderWidth: 1, backgroundColor: "#fff" }}>
        <SectionTitle>Status</SectionTitle>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {ready ? <Pill>Ready</Pill> : <Pill>Loading</Pill>}
          {loading && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <ActivityIndicator />
              <Text>{loading}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Step 1: Import folder */}
      <View style={{ marginBottom: 16, padding: 12, borderRadius: 12, borderWidth: 1, backgroundColor: "#fff" }}>
        <SectionTitle>1. Import Data </SectionTitle>
        <Text style={{ marginBottom: 8 }}>
          Please select the top folder. The directory name above each image will be used as the class name.
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <FilePickFolder />
          <TouchableOpacity onPress={onLearn} style={{ backgroundColor: "#dcfce7", borderWidth: 1, borderColor: "#bbf7d0", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 }}>
            <Text style={{ fontWeight: "800", color: "#166534" }}>Learn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClear} style={{ backgroundColor: "#fee2e2", borderWidth: 1, borderColor: "#fecaca", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 8 }}>
            <Text style={{ fontWeight: "700", color: "#991b1b" }}>Clear</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#475569", marginBottom: 6 }}>Pending images: {pendingFiles.length}</Text>
        <View style={{ marginTop: 6 }}>{ClassCountBadges}</View>
      </View>

      {/* Step 2: Pick test & Predict */}
      <View style={{ marginBottom: 16, padding: 12, borderRadius: 12, borderWidth: 1, backgroundColor: "#fff" }}>
        <SectionTitle>2) Test a image </SectionTitle>
        <Text style={{ marginBottom: 8 }}>Select a test image and then press "Predict".</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <FilePickTest />
          <TouchableOpacity onPress={onPredictBtn} style={{ backgroundColor: "#e0f2fe", borderWidth: 1, borderColor: "#bae6fd", paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 }}>
            <Text style={{ fontWeight: "800", color: "#075985" }}>Predict</Text>
          </TouchableOpacity>
        </View>

        {/* Previews */}
        <View style={{ gap: 8, marginTop: 8 }}>
          {testPreview && (
            <View>
              <Text style={{ fontWeight: "700", marginBottom: 6 }}>Test Image</Text>
              {/* @ts-ignore web-only */}
              <img src={testPreview} alt="test" style={{ maxWidth: 320, borderRadius: 8, border: "1px solid #ddd" }} />
            </View>
          )}
          {pred && (
            <View>
              <Text style={{ fontWeight: "700", marginBottom: 6 }}>Prediction</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
                <Pill>Top: {pred.label}</Pill>
                {Object.entries(pred.confidences)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 5)
                  .map(([k, v]) => (
                    <Pill key={k}>{k}: {(v * 100).toFixed(1)}%</Pill>
                  ))}
              </View>
            </View>
          )}
        </View>
      </View>

      {/* Previews of imported images */}
      <View style={{ marginBottom: 16, padding: 12, borderRadius: 12, borderWidth: 1, backgroundColor: "#fff" }}>
        <SectionTitle>Training Data Previews (latest first)</SectionTitle>
        {trainPreviews.length === 0 ? (
          <Text style={{ color: "#666" }}>(Nothing yet)</Text>
        ) : (
          <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
            {trainPreviews.map((p, idx) => (
              <View key={idx} style={{ alignItems: "center" }}>
                {/* @ts-ignore web-only */}
                <img src={p.uri} alt={p.label} style={{ width: 96, height: 96, objectFit: "cover", borderRadius: 8, border: "1px solid #e5e7eb" }} />
                <Text style={{ fontSize: 12, marginTop: 4 }}>{p.label}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      <View style={{ marginBottom: 32, padding: 12, borderRadius: 12, borderWidth: 1, backgroundColor: "#fff" }}>
        <SectionTitle>Console</SectionTitle>
        <View style={{ backgroundColor: "#0b1220", borderRadius: 8, padding: 10 }}>
          {messages.length === 0 ? (
            <Text style={{ color: "#9ca3af", fontFamily: "monospace" }}>(No output yet.)</Text>
          ) : (
            messages.map((m, i) => (
              <Text key={i} style={{ color: "#e5e7eb", fontFamily: "monospace", marginBottom: 4 }}>{m}</Text>
            ))
          )}
        </View>
      </View>

      <Text style={{ color: "#64748b", fontSize: 12, marginBottom: 24 }}>
        Notes: Folder format is <code>.../&lt;label&gt;/&lt;image files&gt;</code>. Select a folder, click <b>Learn</b>, then choose a test image and click <b>Predict</b>. Images never leave your device.
      </Text>
    </ScrollView>
  );
}
```

<a id="frontend-app-tsconfig.json"></a>
### 37. `frontend/app/tsconfig.json`
- Size: 302 bytes | LOC: 13 | SLOC: 13 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: ab0b035eb9a5

#### Brief
{
  "extends": "expo/tsconfig.base",

#### Auto Summary
{

#### Content

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "lib": ["esnext", "dom"],
    "types": ["jest", "@testing-library/jest-dom", "node"],
    "baseUrl": ".",
    "paths": {
      "pyodide": ["node_modules/pyodide/pyodide"]
    }
  }
}
```

<a id="frontend-app-types-dom-augment.d.ts"></a>
### 38. `frontend/app/types/dom-augment.d.ts`
- Size: 414 bytes | LOC: 15 | SLOC: 12 | TODOs: 0 | Modified: 2025-10-22 13:30:15 | SHA1: 2dc1042ebb97

#### Brief
Allow non-standard directory upload attributes on <input type="file">

#### Auto Summary
// Allow non-standard directory upload attributes on <input type="file">

#### Content

```typescript
// Allow non-standard directory upload attributes on <input type="file">
import 'react';

declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    /** Chromium/Safari directory picker */
    webkitdirectory?: boolean;
    /** Firefox directory picker */
    mozdirectory?: boolean;
    /** Generic directory attribute (non-standard) */
    directory?: boolean;
  }
}

export {};
```

<a id="frontend-Dockerfile"></a>
### 39. `frontend/Dockerfile`
- Size: 96 bytes | LOC: 8 | SLOC: 5 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 4b630391dc7b

#### Brief
FROM node:20-bullseye

#### Auto Summary
FROM node:20-bullseye

#### Content

```dockerfile
FROM node:20-bullseye

WORKDIR /app

COPY app/package*.json ./
RUN npm ci

CMD ["npm", "start"]
```

<a id="frontend-Dockerfile.test"></a>
### 40. `frontend/Dockerfile.test`
- Size: 146 bytes | LOC: 8 | SLOC: 5 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 68e6f87b8c83

#### Brief
FROM node:20-bullseye

#### Auto Summary
FROM node:20-bullseye

#### Content

```
FROM node:20-bullseye

WORKDIR /app

COPY app/package*.json ./
RUN npm ci --include=dev

CMD ["npm","test","--","--ci","--runInBand","--verbose"]
```

<a id="LICENSE"></a>
### 41. `LICENSE`
- Size: 11340 bytes | LOC: 201 | SLOC: 169 | TODOs: 0 | Modified: 2025-10-22 11:05:06 | SHA1: 64f2208f2896

#### Brief
Apache License
                           Version 2.0, January 2004

#### Auto Summary
Apache License

#### Content

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright 2025 europanite

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

<a id="README.md"></a>
### 42. `README.md`
- Size: 680 bytes | LOC: 32 | SLOC: 21 | TODOs: 0 | Modified: 2025-10-22 11:08:32 | SHA1: 44122c1f172d

#### Brief
# [Browser Based AI Training](https://github.com/europanite/browser_based_ai_training "Browser Based AI Training")

#### Auto Summary
[Browser Based AI Training](https://github.com/europanite/browser_based_ai_training "Browser Based AI Training")

#### Content (verbatim)

```markdown
# [Browser Based AI Training](https://github.com/europanite/browser_based_ai_training "Browser Based AI Training")

A Browser-Based AI Training Playground. 

!["web_ui"](./assets/images/web_ui.png)

##  Demo
 [Browser Based AI Training](https://europanite.github.io/browser_based_ai_training/)

---

## 🚀 Getting Started

### 1. Prerequisites
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### 2. Build and start all services:

```bash
# set environment variables:
export REACT_NATIVE_PACKAGER_HOSTNAME=${YOUR_HOST}

# Build the image
docker compose build

# Run the container
docker compose up
```
---

# License
- Apache License 2.0
```

<a id="SECURITY.md"></a>
### 43. `SECURITY.md`
- Size: 1127 bytes | LOC: 37 | SLOC: 23 | TODOs: 0 | Modified: 2025-10-22 11:07:19 | SHA1: 6f4e3a8a334c

#### Brief
# Security Policy

#### Auto Summary
Security Policy

#### Content (verbatim)

```markdown
# Security Policy

## Supported Versions

The following table shows which versions of `browser_based_ai_training` are currently being supported with security updates.

| Version | Supported          |
|---------|--------------------|
| main    | :white_check_mark: |

We only provide security updates and fixes for the latest code on the **main** branch.

---

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please help us keep the community safe by following these steps:

- Provide as much detail as possible:
   - A clear description of the vulnerability
   - Steps to reproduce the issue
   - The potential impact
   - Any suggested fixes or mitigations

---

## Security Best Practices for Users

- Always pull the latest image or rebuild the environment to ensure patched dependencies.
- Avoid exposing ports publicly unless necessary.
- Use strong passwords and secrets when connecting to external resources.

---

## Acknowledgements

We deeply appreciate the efforts of security researchers and contributors who help us improve the security of `browser_based_ai_training`.
```
