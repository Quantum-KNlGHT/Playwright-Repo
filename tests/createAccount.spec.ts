import { test, expect } from '@playwright/test';

test('Create Account test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email_create').fill('test32146@gmail.com');
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('test');
  await page.getByRole('textbox', { name: 'Password *' }).fill('Test@1234');
  await page.locator('#days').selectOption('14');
  await page.locator('#months').selectOption('10');
  await page.locator('#years').selectOption('1988');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Your account has been created.')).toBeVisible();
});