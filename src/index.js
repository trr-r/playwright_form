const submitBtn = document.querySelector("#submit-button")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const age = document.querySelector("#age")
const msg = document.querySelector("#message")


submitBtn.addEventListener("click", (event) => {
  event.preventDefault()
  if (
    name.value.length == 0 ||
    email.value.length == 0 ||
    age.value.length == 0
  ) {
    message.innerHTML = "Заполните все поля"
  } else message.innerHTML = `Добро пожаловать, ${name.value}!`
  //window.location.href = "about.html"
})

const getData = document.querySelector("#getData")
const users = document.querySelector("#users")

// getData.addEventListener("click", async () => {
//     console.log("Тест")
//     try{
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users/12" )
//         // const data = await response
//         // console.log(data)
//         //users.innerHTML = data.name
//         console.log(response)
//     } catch(err){
//         console.log("Произошла ошибка")
//     }
//     console.log('Тест2')
// })

const clearData = document.querySelector("#clearData")

clearData.addEventListener("click", () => {
  name.value = ""
  age.value = ""
  email.value = ""
  message.innerHTML = ""
})

getData.addEventListener("click", async () => {
    console.log("Тест")
    const response = await axios.get(
      "https://api.api-ninjas.com/v2/randomuser?count=1",
      {
        headers: {
          "X-Api-Key": "XFH3YeKpMuG7NAgOcbptbuHftBNR1tDDQYzIJ7Af",
        },
      }
    )
    console.log(response)

    const { first_name, last_name, age, email } = response.data[0]
    users.innerHTML = `user: ${first_name}, ${last_name}`
    console.log(first_name, last_name, age, email)
  
})

//Нужно написать вначале какую-то логику работы с select - создать его в html и в js прописать, 
//что, например, при клике на кнопку будет выводиться на странице значение из селекта. 
//Это может быть что угодно - любой выпадающий список. И после этого написать несколько тестов на это.

const petSelect = document.querySelector("#petSelect")
const petName = document.querySelector("#petName")

petSelect.addEventListener("click", ()=>{
  petName.innerHTML = petSelect.value
})


//И также с нажатием клавиш - написать, например, на JS, что при нажатии клавиши "Enter" на странице будет выводиться какой-то текст. 
//А потом это протестировать. Можете запускать тесты в ui режиме или в браузере, чтобы сразу смотреть как это будет работать

const btn = document.querySelector("#btn")
const btnText = document.querySelector("#btnText")

btn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnText.innerHTML = "Вы нажали Enter"
  }
})