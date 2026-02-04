## The “Hybrid” Approach: UI vs. Programmatic Setup

### What We Gain (Rewards)
- **Speed**: Skipping UI login/data setup reduces test time significantly.
- **Stability**: Fewer UI steps means fewer timing/flaky failures.
- **Focus**: Tests concentrate on the checkout behavior rather than repeating setup.
- **Parallelization**: Programmatic setup scales better for CI with many tests.

### What We Lose (Risks)
- **Login UI coverage**: We no longer validate login form behavior, validation messages, or UI changes.
- **End‑to‑end realism**: The full user journey from login to checkout is partially bypassed.
- **Potential mismatch**: If auth/session behavior changes, tests could pass while the UI login is broken.

### Recommended Balance
- Keep **1–2 UI login tests** as smoke coverage for the login flow.
- Use **programmatic login** for the majority of checkout and UI/UX tests.
- Re‑evaluate if the product’s auth mechanism changes.
