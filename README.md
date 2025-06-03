# Shared NPM Package Repository

This repository hosts a shared NPM package collaboratively developed and maintained by multiple organizations. It uses a clean Git workflow, semantic versioning, and Nx for managing code and builds.

## 🧱 Project Structure

- **Nx Monorepo**: Manages multiple libraries or apps (if needed).
- **Tests**: Written with Jest, colocated with source files.
- **CI/CD**: GitHub Actions pipelines for testing, building, and publishing.

---

## 🔁 Git Workflow

We follow a structured Git flow:

### 🔹 Branch Types

| Branch      | Purpose                          |
| ----------- | -------------------------------- |
| `main`      | Production-ready, latest release |
| `feature/*` | New features                     |
| `bug/*`     | Bug fixes                        |
| `chore/*`   | Small tasks                      |

### 🔐 Protected Branch Rules

- Require pull requests and code review.
- Require successful CI checks (tests, linting, build).

### 💬 Commit messages

Commit messages must adhere to [Conventional Commits guidelines](https://www.conventionalcommits.org/).

`<type>(<scope>): <short summary>`
│ │ │
│ │ └─⫸ Summary in present tense. Not capitalized. No period at the end.
│ │
│ └─⫸ Commit Scope: core-updates | docker-config | ...
│
└─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test

---

## 🧾 Versioning & Releases

### 🔢 Semantic Versioning (SemVer)

We follow [Semantic Versioning](https://semver.org/): MAJOR.MINOR.PATCH

- `MAJOR`: Breaking changes
- `MINOR`: Backward-compatible features
- `PATCH`: Bug fixes

### 🔖 Releasing

1. Merge into `main` via PR.
2. Run the desired release workflow with the desired version number (e.g. 1.2.0)

---

## 👥 Roles & Permissions

| Role            | Capabilities                              |
| --------------- | ----------------------------------------- |
| **Maintainer**  | Approve/review PRs, publish releases      |
| **Contributor** | Create branches, open PRs, request review |

> 🔒 Use GitHub/GitLab role-based permissions to enforce access.

---

## ⚙️ Nx Usage

We use [Nx](https://nx.dev) as our monorepo tool for managing libraries and apps.

### 🚀 Common Commands

| Command                  | Description                    |
| ------------------------ | ------------------------------ |
| `npx nx build <project>` | Build a package                |
| `npx nx test <project>`  | Run unit tests                 |
| `npx nx lint <project>`  | Lint code with ESLint          |
| `npx nx affected:build`  | Build only changed projects    |
| `npx nx affected:test`   | Test only changed projects     |
| `npx nx graph`           | Visualize the dependency graph |

---

## 🧩 Recommended Editor Extensions

### VSCode

- [Nx Console (by Nx)](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### JetBrains (WebStorm/IntelliJ)

- [Nx Plugin](https://plugins.jetbrains.com/plugin/21081-nx-console)
- [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint)
- [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
