const { test, expect } = require("@playwright/test");
const { email, password } = require("../user");
const { invalidEmail, invalidPassword } = require("../notAuthorizedUser");



test.describe("Авторизация", () => {
    test("Успешная авторизация", async ({ page }) => {
        await page.goto("https://netology.ru/?modal=sign_in");
        await expect(page.locator("//* [@class='styles_title__ImB5r']")).toContainText('Вход в личный кабинет');
        await page.fill("//input [@placeholder='Email']", email);
        await page.fill("//input [@placeholder='Пароль']", password);
        await page.click("//* [@data-testid='login-submit-btn']");
        await expect(page.url()).toBe("https://netology.ru/profile/8187730");
    });

    test("Неуспешная авторизация", async ({ page }) => {
        await page.goto("https://netology.ru/?modal=sign_in");
        await expect(page.locator("//* [@class='styles_title__ImB5r']")).toContainText('Вход в личный кабинет');
        await page.fill("//input [@placeholder='Email']", invalidEmail);
        await page.fill("//input [@placeholder='Пароль']", invalidPassword);
        await page.click("//* [@data-testid='login-submit-btn']");
        await expect(page.locator("//* [@data-testId='login-error-hint']")).toBeVisible();
    });
});
