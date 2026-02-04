# Checkout Flow Test Plan (Sauce Demo)

## Framework Choice
**Playwright + TypeScript**
- Fast parallel execution and reliable auto-waiting for modern CI.
- Built-in tracing, screenshots, and video on failure.
- Strong selector engine and fixtures for programmatic login.

## Goals
- Validate the Sauce Demo checkout flow end-to-end.
- Ensure the key UI states and confirmation message appear.
- Keep tests fast, stable, and CI-friendly with a hybrid setup.

## Scope
### In Scope
- Logged-in checkout path (programmatic login via session cookie).
- Cart to order confirmation, including:
  - User Information (First Name, Last Name, Zip/Postal Code)
  - Cart and checkout progression
  - Order completion message
- UI state validation (Add to Cart → Remove).
- Mobile viewport checkout (iPhone 12/13 dimensions).

### Out of Scope
- Real payment, shipping carriers, or tax calculations (not part of Sauce Demo).
- Backend integrations and external provider UIs.
- Performance/load testing.

## Environments
- CI: Headless browsers against https://www.saucedemo.com.
- Local: Headed runs for debugging.

## Test Types
- **UI tests**: Checkout flow, cart interactions, confirmation page.
- **UX/UI checks**: Button state and color change, mobile viewport flow.

## Test Data Strategy
- Use Sauce Demo standard user (`standard_user`).
- Use fixed input values for user info fields.
- Use the product “Sauce Labs Backpack” for repeatable selectors.

## Coverage Matrix (High Level)
- **Cart**: add item, cart navigation.
- **Checkout**:
  - User info form completion.
  - Continue → finish flow.
  - Order confirmation message.
- **UX/UI**:
  - Add to Cart → Remove state.
  - Remove button color matches site CSS.
  - Mobile viewport checkout.

## Smoke Suite (CI, <10 min)
- Logged-in checkout (programmatic login).
- Visual logic check for Remove button.
- Mobile checkout flow.

## Regression Suite (Nightly)
- Repeat checkout with different inventory items.
- Edge cases: empty cart, missing user info.

## Exit Criteria
- 0 critical failures in smoke suite.
- <2% flaky failures in last 10 CI runs.
- All checkout critical path tests passing.

## Observability & Reporting
- Per-test screenshots and videos on failure.
- Network traces on failed payment/order steps.
- Trend dashboards for runtime and flakiness.

## Hybrid Approach: Bypassing UI for Setup
**What we gain**
- Faster tests by skipping login UI.
- Less flakiness from UI timing and DOM changes.
- Cleaner focus on checkout behavior.

**What we lose**
- Coverage of the login screen and its client-side validation.
- Reduced end-to-end coverage for the full user journey.

**Balance**
- Keep a small UI login test if login coverage is required.
- Use programmatic login for the majority of checkout and UI validation tests.
