import { test as base } from '@playwright/test';

/**
 * Custom fixtures used to provide a programmatic login state.
 * `username` can be overridden per test to simulate different users.
 */
type AuthFixtures = {
  username: string;
};

/**
 * Extends the Playwright `test` with an authenticated context.
 * The Sauce Demo app treats the `session-username` cookie as an auth signal,
 * so we inject it before any page is created.
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
