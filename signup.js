const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);
const {name , email , token, password} = user;

document.querySelector(".name_span").innerText = name;
document.querySelector(".email_span").innerText = email;
document.querySelector(".token_span").innerText = token;
document.querySelector(".password_span").innerText = password;

function logout(){
    localStorage.removeItem("user");
    location.href = "index.html";
}