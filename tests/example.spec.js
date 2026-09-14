
import { test, expect } from '@playwright/test';

test('Проверка формы', async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/src/index.html")
  await expect(page.locator("#name")).toBeVisible()
  await expect(page.locator("#title")).toHaveText("Регистрация")
  await page.locator("#name").fill("Мария")
  await page.locator("#email").fill("test@test.com")
  await page.locator("#age").fill("20")
  await page.locator("#submit-button").click()
  await expect(page.locator("#message")).toHaveText("Добро пожаловать, Мария!")
  await expect(page.locator("#age")).toHaveValue("20")
});

test("Проверка с пустыми полями", async ({page})=>{
  await page.goto("http://127.0.0.1:5500/src/index.html")
  await page.locator("#submit-button").click()
  await expect(page.locator("#message")).toHaveText("Заполните все поля")
  await page.locator("#name").fill("Мария")
  await page.locator("#email").fill("test@test.com")
  await page.locator("#submit-button").click()
  await expect(page.locator("#message")).toHaveText("Заполните все поля")
})

// test("Проверка ссылки", async ({page})=>{
//   await page.goto("http://127.0.0.1:5500/src/index.html")
//   await page.locator("#submit-button").click()
//   await expect(page).toHaveURL(/about/)
// })

test("Проверка очистки формы", async ({page})=>{
  await page.goto("http://127.0.0.1:5500/src/index.html")
  await page.locator("#name").fill("Мария")
  await page.locator("#email").fill("test@test.com")
  await page.locator("#age").fill("20")
  await page.locator("#submit-button").click()
  await page.locator("#clearData").click()
  await expect(page.locator("#name")).toHaveValue("")
  await expect(page.locator("#email")).toHaveValue("")
  await expect(page.locator("#age")).toHaveValue("")
})

