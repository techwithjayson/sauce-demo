# Part 4 — The Senior “X‑Factor” (CI/CD)

This section adds a CI pipeline to automatically install dependencies, run the Playwright test suites, and upload the test reports as downloadable artifacts.

## What’s Included
- GitHub Actions workflow: [.github/workflows/playwright-ci.yml](../.github/workflows/playwright-ci.yml)

## What the Workflow Does
1. Checks out the repository.
2. Sets up Node.js.
3. Installs dependencies for part‑2 and part‑3.
4. Installs Playwright browsers.
5. Runs tests for part‑2 and part‑3.
6. Uploads `playwright-report` and `test-results` for each part as artifacts.

## Where to Find Reports
In GitHub Actions, open a run and download:
- `playwright-report-part-2`
- `playwright-report-part-3`

## Notes
- The workflow runs on push and pull requests.
- If new parts are added, include them in the workflow steps for consistent reporting.
