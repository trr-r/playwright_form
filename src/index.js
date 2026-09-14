//import axios from "/axios"

const submitBtn = document.querySelector("#submit-button")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const age = document.querySelector("#age")
const msg = document.querySelector("#message")


submitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    if(name.value.length == 0 || email.value.length == 0 || age.value.length == 0){
        message.innerHTML = "Заполните все поля"
    }
    else message.innerHTML = `Добро пожаловать, ${name.value}!`
    //window.location.href = "about.html"
})


const getData = document.querySelector("#getData")
const users = document.querySelector("#users")

getData.addEventListener("click", () => {
    //console.log("Тест")
    // const response = axios.get("https://api.api-ninjas.com/v2/randomuser?count=1", {headers:{
    //     "X-Api-Key":"XFH3YeKpMuG7NAgOcbptbuHftBNR1tDDQYzIJ7Af"
    // }})
    // console.log(response)
})

const clearData = document.querySelector('#clearData')

clearData.addEventListener("click", ()=>{
    name.value = ''
    age.value = ''
    email.value = ''
    message.innerHTML = ''
})

// 3. Доделать логику с проектом с формой:
// - вместо текста "успешно" отображать "Добро пожаловать, "имя из инпута""!
// Например, добро пожаловать, Анна!
// Вначале реализовать эту логику, а потом под нее поменять тесты.
// - добавить кнопку "очистить данные". При клике на нее инпуты должны очищаться, а сообщение из message исчезать. Сделать тесты, которые это проверят.