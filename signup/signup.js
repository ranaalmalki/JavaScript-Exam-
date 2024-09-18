let url = "https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"

let first_name = document.getElementById("firstname")
let username_input=document.getElementById("username-input")
let Input_Email1 = document.getElementById("InputEmail1")
let pass = document.getElementById("input-password")
let form_id = document.getElementById("form-id")





form_id.addEventListener("submit",(event)=>{
    event.preventDefault();

fetch(url,{
    method:'POST',
    body: JSON.stringify({
        fname: first_name.value,
        username:username_input.value,
        email: Input_Email1.value,
        password:pass.value,
        
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(res=>res.json())
.then(data=>console.log(data))


})