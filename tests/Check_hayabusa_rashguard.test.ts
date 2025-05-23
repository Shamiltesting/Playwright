import { test, expect } from '@playwright/test';

test('Check_hayabusa_rashguard', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Пошук' }).click();
  await page.getByRole('combobox', { name: 'Пошук' }).fill('haybusa');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Пошук' }).fill('hayabusa');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowRight');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowRight');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowRight');
  await page.getByRole('combobox', { name: 'Пошук' }).press('ArrowRight');
  await page.getByRole('combobox', { name: 'Пошук' }).fill('hayabusa mma');
  await page.getByText('hayabusa mma', { exact: true }).click();
  await page.goto('https://www.hayabusafight.eu/');
  await page.getByRole('button', { name: 'Apparel' }).click(); 
  await page.getByText('No-Gi Jiu-Jitsu Rash Guards MMA Shorts Spats', { exact: true }).click();
  await page.getByRole('link', { name: 'Rash Guards' }).click();
  await page.getByRole('link', { name: 'Hayabusa Fusion Short Sleeve Rash Guard', exact: true }).click();
  await page.getByRole('button', { name: 'Blue/Green' }).click();
  await page.getByRole('button', { name: 'Add To Cart' }).click();
  await page.getByRole('link', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('shamiltesting@gmail.com');
  await page.getByLabel('Country/Region').selectOption('BG');
  await page.getByLabel('Country/Region').selectOption('FR');
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Shamil');
  await page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Akhmadov');
  await page.getByRole('button', { name: 'Pay now' }).click();
});