import { test, expect } from './fixtures/auth';

/**
 * Responsive checkout validation on a mobile viewport (iPhone 12/13 dimensions).
 * This ensures the checkout flow is functional on smaller screens.
 */
test.describe('mobile checkout flow', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('checkout completes successfully on mobile', async ({ page }) => {
    await page.goto('/inventory.html');
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

    // Add a product and proceed through the standard checkout steps.
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    await page.locator('[data-test="finish"]').click();

    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
  });
});
