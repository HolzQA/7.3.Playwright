const { email, password } = require("../user");


test.describe("Авторизация", () => {
    test("Успешная авторизация", async ({ page }) => {
        await page.goto("https://netology.ru/?modal=sign_in");
        await page.goto("https://netology.ru/?modal=sign_in");
        await page.click("//input [@placeholder='Email']").fill(email);
        await page.click("//input [@placeholder='Пароль']").fill(password);
        await page.click("//* [@data-testid='login-submit-btn']");
        await expect(page.url()).toBe("https://netology.ru/profile");
    });

    test("Неуспешная авторизация", async ({ page }) => {
        await page.goto("https://netology.ru/?modal=sign_in");
        await page.goto("https://netology.ru/?modal=sign_in");
        await page.click("//input [@placeholder='Email']").fill("fghsdf@gmail.com");
        await page.click("//input [@placeholder='Пароль']").fill("sfksjdb");
        await page.click("//* [@data-testid='login-submit-btn']");
        await expect(page).toBeVisible("//* [@data-testId='login-error-hint']");
    });
});
