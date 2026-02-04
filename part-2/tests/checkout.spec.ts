import { test, expect } from './fixtures/auth';

/**
 * E2E checkout validation using an authenticated session from the auth fixture.
 * Steps:
 * 1) Open inventory page (requires login).
 * 2) Add an item to cart and start checkout.
 * 3) Fill user info and complete purchase.
 * 4) Assert the order confirmation message.
 */
test('checkout flow completes successfully', async ({ page }) => {
  // Authenticated landing page.
  await page.goto('/inventory.html');
  await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

  // Add a product to cart and proceed to checkout.
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Provide customer information.
  await page.locator('[data-test="firstName"]').fill('Test');
  await page.locator('[data-test="lastName"]').fill('User');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  // Finish the order.
  await page.locator('[data-test="finish"]').click();

  // Validate confirmation.
  await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
});
