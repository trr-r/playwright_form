import axios from "axios"

const response = axios.get("https://api.api-ninjas.com/v2/randomuser?count=1", {headers:{
    "X-Api-Key":"XFH3YeKpMuG7NAgOcbptbuHftBNR1tDDQYzIJ7Af"
}})
console.log(response)