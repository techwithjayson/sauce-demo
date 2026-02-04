Framework choice: Playwright + TypeScript. It’s fast in CI (parallel, headless, auto-waiting), modern (network stubbing, built-in test runner), reliable across Chromium/Firefox/WebKit, and easy to integrate with API setup for hybrid tests.

Hybrid approach (UI bypass for setup):

- Rewards: Massive speed-up (API setup is 5–20x faster), lower flake rate, less brittle tests, better isolation, and more deterministic data.
- Risks: We lose coverage of UI-based login and data-creation flows (form validation, UX regressions, auth UI issues).
- Mitigation: Keep a small, targeted UI smoke path for login and onboarding while moving most setup to API/fixtures. This preserves critical UI coverage without paying the runtime cost in every test.