# Sauce Demo Playwright Tests

## Overview
Playwright + TypeScript test suite for Sauce Demo with programmatic login using cookie injection.

## Setup
1. Install dependencies:
   - npm install
2. Install Playwright browsers:
   - npx playwright install

## Run Tests
- Headless:
  - npm test
- Headed:
  - npm run test:headed
- Debug:
  - npm run test:debug

## Notes
- Tests inject the `session-username` cookie to skip the login UI.
- The checkout flow starts at /inventory.html and verifies the confirmation message.
