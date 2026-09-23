import { test, expect } from "@playwright/test"

const url = "http://127.0.0.1:5501/src/index.html"

test("Проверка формы", async ({ page }) => {
  await page.goto(url)
  await expect(page.locator("#name")).toBeVisible()
  await expect(page.locator("#title")).toHaveText("Регистрация")
  await page.locator("#name").fill("Мария")
  await page.locator("#email").fill("test@test.com")
  await page.locator("#age").fill("20")
  await page.locator("#submit-button").click()
  await expect(page.locator("#message")).toHaveText("Добро пожаловать, Мария!")
  await expect(page.locator("#age")).toHaveValue("20")
})

test("Проверка с пустыми полями", async ({ page }) => {
  await page.goto(url)
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

test("Проверка очистки формы", async ({ page }) => {
  await page.goto(url)
  await page.locator("#name").fill("Мария")
  await page.locator("#email").fill("test@test.com")
  await page.locator("#age").fill("20")
  await page.locator("#submit-button").click()
  await page.locator("#clearData").click()
  await expect(page.locator("#name")).toHaveValue("")
  await expect(page.locator("#email")).toHaveValue("")
  await expect(page.locator("#age")).toHaveValue("")
})

// test("Проверка запроса получение данных", async ({ page }) => {
//   await page.goto(url)
//   const responsePromise = page.waitForResponse((response) => {
//     return (
//       response.url().includes("api.api-ninjas.com") && response.status() === 200
//     )
//   })
//   await page.locator("#getData").click()
//   await responsePromise
//   await expect(page.locator("#users")).toContainText("user:")
// })

test("Ждем конкретное время", async ({page}) =>{
  await page.goto(url)
  await page.locator("#getData").click()
  await expect(page.locator("#users")).toContainText("user:", {timeout: 10000})
} )

// test("Мок запроса пользователей", async ({ page }) => {
//   await page.route("https://jsonplaceholder.typicode.com/users", (route) => {
//     route.fulfill({
//       status: 200,
//       contentType: "application/json",
//       body: JSON.stringify([
//         { id: 1, name: "Тестовый пользователь", email: "test@example.com" },
//       ]),
//     })
//   })
// })
