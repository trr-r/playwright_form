//const { default: axios } = require("axios")

const users = document.querySelector("#users")
const btn = document.querySelector("#btn")

btn.addEventListener("click", async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    users.innerHTML = response.data.name
    //console.log(response.data.name)
})

//3. (не связано с 1 и 2 заданием, если хотите, то можете начать с него). 
//В нашем файлике users.js немного поменять логику - получать с сервера не одного пользователя, 
//а всех пользователей (массив users) и отрисовывать их имена на странице. 
//После того, как все будет работать, поменять наш последний тест (называется "мок запроса пользователей") 
//и в качестве моковых данных отдавать не просто объект, а массив с объектом (у нас изначально так и было).


