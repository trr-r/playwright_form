import { test, expect } from "@playwright/test"

const url = "/"

const elements = [
  {
    locator: (page) => page.locator("#name"),
    name: "Имя",
  },
  {
    locator: (page) => page.locator("#title"),
    name: "Заголовок 'Зарегистрироваться'",
  },
  {
    locator: (page) => page.locator("#email"),
    name: "Email",
  },
  {
    locator: (page) => page.locator("#age"),
    name: "Возраст",
  },
  {
    locator: (page) => page.locator("#submit-button"),
    name: "Кнопка 'Зарегистрироваться'",
  },
]

test.describe("Тесты главной страницы", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url)
  })

  test("Проверка отображения элементов на главной страницы", async ({page}) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Проверка отображения элемента ${name}`, async () => {
        await expect(locator(page)).toBeVisible()
      })
    })
  })

  test("Проверка текста в формах", async ({ page }) => {
    await expect(page.locator("#title")).toHaveText("Регистрация")
    await page.locator("#name").fill("Мария")
    await page.locator("#email").fill("test@test.com")
    await page.locator("#age").fill("20")
    await page.locator("#submit-button").click()
    await expect(page.locator("#message")).toHaveText(
      "Добро пожаловать, Мария!"
    )
    await expect(page.locator("#age")).toHaveValue("20")
  })

  test("Проверка с пустыми полями", async ({ page }) => {
    await page.locator("#submit-button").click()
    await expect(page.locator("#message")).toHaveText("Заполните все поля")
    await page.locator("#name").fill("Мария")
    await page.locator("#email").fill("test@test.com")
    await page.locator("#submit-button").click()
    await expect(page.locator("#message")).toHaveText("Заполните все поля")
  })

  test.skip("Проверка ссылки", async ({ page }) => {
    await page.locator("#submit-button").click()
    await expect(page).toHaveURL(/about/)
  })

  test("Проверка очистки формы", async ({ page }) => {
    await page.locator("#name").fill("Мария")
    await page.locator("#email").fill("test@test.com")
    await page.locator("#age").fill("20")
    await page.locator("#submit-button").click()
    await page.locator("#clearData").click()
    await expect(page.locator("#name")).toHaveValue("")
    await expect(page.locator("#email")).toHaveValue("")
    await expect(page.locator("#age")).toHaveValue("")
  })

  test("Проверка запроса получение данных", async ({ page }) => {
    const responsePromise = page.waitForResponse((response) => {
      return (
        response.url().includes("api.api-ninjas.com") &&
        response.status() === 200
      )
    })

    await page.locator("#getData").click()
    await responsePromise
    await expect(page.locator("#users")).toContainText("user:")
  })

  test("Ждем конкретное время", async ({ page }) => {
    await page.locator("#getData").click()
    await expect(page.locator("#users")).toContainText("user:")
  })

  test("Проверка выпадающего списка", async ({ page }) => {
    await page.locator("#petSelect").selectOption("Кот")
    await page.locator("#petSelect").click()
    await expect(page.locator("#petName")).toHaveText("Кот")
  })

  test("Проверка клика на Enter", async ({ page }) => {
    await page.locator("#btn").press("Enter")
    await expect(page.locator("#btnText")).toHaveText("Вы нажали Enter")
  })

  test("Мок запроса пользователей", async ({ page }) => {
    await page.route(
      "https://jsonplaceholder.typicode.com/users/1",
      (route) => {
        route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            id: 1,
            name: "Тестовый пользователь",
            email: "test@example.com",
          }),
        })
      }
    )

    await page.goto("/users.html")
    await page.locator("#btn").click()
    await expect(page.locator("#users")).toContainText("Тестовый пользователь")
  })
})
