let url = "https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"

let username_input=document.getElementById("username-input")
let pass = document.getElementById("input-password")
let form_id = document.getElementById("form-id")





form_id.addEventListener("submit",(event)=>{
    event.preventDefault();

fetch(url,{
    method:'POST',
    body: JSON.stringify({
        username:username_input.value,
        password:pass.value,
        
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(res=>res.json())
.then(data=>console.log(data))

window.location.href = "http://127.0.0.1:5500/JavaScript-Exam-/profile/profileuser.html";

})