import { test, expect } from './fixtures/auth';

/**
 * Visual Logic Check for the inventory page.
 * Validates two things:
 * 1) The Backpack button is clickable and toggles to “Remove”.
 * 2) The “Remove” text color matches the site’s red defined in CSS.
 */
test('backpack button toggles to Remove with site red text', async ({ page }) => {
  await page.goto('/inventory.html');

  const addButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(addButton).toBeVisible();

  // Capture the initial text color to ensure it changes after clicking.
  const beforeColor = await addButton.evaluate((el) => getComputedStyle(el).color);
  await addButton.click();

  const removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  await expect(removeButton).toBeVisible();
  await expect(removeButton).toHaveText(/remove/i);

  // Extract the red color used by the site's CSS for the "Remove" state.
  // We create a temporary element with the expected classes and read its computed style.
  // This avoids hardcoding a color value and ensures we match the live CSS.
  const expectedRemoveColor = await page.evaluate(() => {
    const temp = document.createElement('button');
    temp.className = 'btn btn_secondary btn_inventory';
    temp.textContent = 'Remove';
    document.body.appendChild(temp);

    const color = getComputedStyle(temp).color;
    temp.remove();

    return color || null;
  });

  // Ensure the CSS color was resolved successfully.
  expect(expectedRemoveColor, 'Expected to resolve Remove button color from CSS').not.toBeNull();

  // Validate the real Remove button color equals the CSS-defined red
  // and that it differs from the pre-click state.
  const removeColor = await removeButton.evaluate((el) => getComputedStyle(el).color);
  expect(removeColor).toBe(expectedRemoveColor);
  expect(removeColor).not.toBe(beforeColor);
});
