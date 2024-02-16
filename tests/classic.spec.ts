import { test as setup, expect, test } from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        //await page.goto('http://192.168.1.14');//HongKong From Mark's Local PC
        //This is no longer required if using the base url in playwright.config.ts

    });

    test('heading visible on home page', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByRole('heading', { name: 'Dashboard - Actionalytics' })).toBeVisible();
    });

    test('A_Action List page loads heading', async ({ page }) => {
        await page.goto('/views/?VREF=DataSets');
        await page.getByRole('row', { name: 'A_Action Admin ARM_CORE 11 16' }).getByRole('link').first().click();
        await expect(page.getByRole('heading', { name: 'A_Action' })).toBeVisible();
    });



});