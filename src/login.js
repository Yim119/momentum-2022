// element
const logInForm = document.querySelector(".log-in__form");
const logInInput = document.querySelector(".log-in__input");
const userinfo = document.querySelector(".log-in__userinfo");

// row value
const USERNAME_KEY = "username";
const INVISIBLE = "invisible";

//

function saveUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

function handleSubmit(event) {
  event.preventDefault();
  saveUsername(logInInput.value);
  const key = localStorage.getItem(USERNAME_KEY);
  logInForm.classList.add(INVISIBLE);
  userinfo.classList.remove(INVISIBLE);
  userinfo.innerText = `Hello! ${key}`;
}

const key = localStorage.getItem(USERNAME_KEY);

if (key === null) {
  logInForm.classList.remove(INVISIBLE);
} else {
  userinfo.classList.remove(INVISIBLE);
  userinfo.innerText = `Hello! ${key}`;
}

logInForm.addEventListener("submit", handleSubmit);
