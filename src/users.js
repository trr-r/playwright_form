//const { default: axios } = require("axios")

const users = document.querySelector("#users")
const btn = document.querySelector("#btn")
const table = document.querySelector("#table")

btn.addEventListener("click", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  )
  table.innerHTML = `<tr>
      <th>№</th>
      <th>Имя</th>
    </tr>`
  for (let el of response.data) {
    const html = `
            <tr>
                <td>${el.id}</td>
                <td>${el.name}</td>
            </tr>
    `
    table.insertAdjacentHTML("beforeend", html)
  }
})

//3.
//В нашем файлике users.js немного поменять логику - получать с сервера не одного пользователя,
//а всех пользователей (массив users) и отрисовывать их имена на странице.
//После того, как все будет работать, поменять наш последний тест (называется "мок запроса пользователей")
//и в качестве моковых данных отдавать не просто объект, а массив с объектом (у нас изначально так и было).
