# Sauce Demo Playwright Tests

This repository contains Playwright end-to-end tests for the Sauce Demo application.

**Prerequisites**
- Node.js 16+ and npm installed
- Internet access to download Playwright browsers and npm packages

**Setup & Run (per part)**

- Part 2 (checkout flow):

```powershell
cd part-2
npm install
npx playwright install
npm test
# Optional: headed or debug
npm run test:headed
npm run test:debug
```

- Part 3 (visual/ui tests):

```powershell
cd part-3
npm install
npx playwright install
npm test
# Optional: headed or debug
npm run test:headed
npm run test:debug
```

**Where results go**
- Playwright saves artifacts under each part's `test-results/` directory. Use `npx playwright show-trace <path-to-trace.zip>` to inspect traces.
