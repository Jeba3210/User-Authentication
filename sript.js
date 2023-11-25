const namefield = document.getElementById("name");
const emailfield = document.getElementById("email");
const passwordfield = document.getElementById("password");
const Cpasswordfield = document.getElementById("C-password");


function signup(){
    let name = namefield.value;
    let email = emailfield.value;
    let password = passwordfield.value;
    let Cpassword = Cpasswordfield.value;

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      
    
    if(name === '' || email === '' || password === '' || Cpassword === ''){
        var element1 = document.getElementById("wrong_pass");                        
        element1.classList.add("blank_style");
        element1.innerText = "Error : All fields are mandatory!";
        return;
    }else if(!validateEmail(email)){
        var element1 = document.getElementById("wrong_pass");                        
        element1.classList.add("blank_style");
        element1.innerText = "Error : Email-id is invalid!";
        return;
      }
    else if(password !== Cpassword){
    var element = document.getElementById("wrong_pass");                        
    element.classList.add("wrongPass_style");
    element.innerText = "Password & Confirm password should be same!";
    return;
    }
    
    const token = tokenCreation(16);

    localStorage.setItem("user", JSON.stringify({name, email, token, password}));
    const obj = JSON.parse(localStorage.getItem("user"));
    // console.log(obj);
    location.href = "signup.html";
    
}

function tokenCreation(length){
    let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210!@#$%^&*()_-[]{}/\<>`;
    let ans = '';
    for(let i = 0 ; i < length; i++){
        ans += str.charAt(Math.floor(Math.random()*str.length));
    }
    
    return ans;
}

