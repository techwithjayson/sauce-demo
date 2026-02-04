import { test as base } from '@playwright/test';

/**
 * This fixture provides an authenticated session without UI login.
 * It injects the `session-username` cookie expected by Sauce Demo.
 * Override `username` per test if you need different user roles.
 */
type AuthFixtures = {
  username: string;
};

/**

 * Extends Playwright `test` with a pre-authenticated browser context.
 * The cookie is set before any page loads to avoid flaky UI login steps.
 */
export const test = base.extend<AuthFixtures>({
  // Default username for the session. Can be overridden per test.
  username: ['standard_user', { option: true }],
  context: async ({ context, username }, use) => {
    // Programmatic login by adding the auth cookie to the browser context.
    await context.addCookies([
      {
        name: 'session-username',
        value: username,
        url: 'https://www.saucedemo.com'
      }
    ]);

    await use(context);
  }
});

// Re-export expect for convenience in tests that use this fixture.
export { expect } from '@playwright/test';
