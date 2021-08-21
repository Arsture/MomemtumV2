const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelectorAll("#greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function addH1(){
    const savedUserName = localStorage.getItem(USERNAME_KEY);
    greeting[0].innerText = `반가워요, ${savedUserName} 님!`;
    greeting[0].classList.remove(HIDDEN_CLASS);
}

function submitChecker(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASS);
    addH1();
}

if(localStorage.getItem(USERNAME_KEY) === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", submitChecker);
} else {
    addH1();
}