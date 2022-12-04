const loginDiv = document.querySelector(".login_div");
const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const LoginTxt = document.querySelector(".login_txt");
const loginName = document.querySelector("#login_name");
const USER = "user";
const HIDDEN = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const loginValue = loginInput.value;
    loginName.innerText = loginValue;
    localStorage.setItem(USER, loginValue);
    onLoginSave(loginValue);
}

function onLoginSave(loginValue){
    loginForm.classList.add(HIDDEN);
    LoginTxt.classList.remove(HIDDEN);
    const getItem = localStorage.getItem(USER);
    loginName.innerText = getItem;
}

if(localStorage.getItem(USER) === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    onLoginSave();
}
