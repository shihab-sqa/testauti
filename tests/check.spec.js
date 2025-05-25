import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa.dev-adventure.com/');
  await page.locator('#nav-user svg').nth(1).click();
  await page.getByRole('button', { name: 'LOGIN/SIGN UP' }).click();
  await page.getByRole('textbox', { name: 'Enter your Email ID/Mobile' }).click();
  await page.getByRole('textbox', { name: 'Enter your Email ID/Mobile' }).fill('shihabzzhasan@gmail.com');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Password@25');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#nav-user path').click();
  await page.getByText('Logout').click();
});