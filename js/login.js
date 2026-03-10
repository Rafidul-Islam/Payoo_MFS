const MOBILE_NUMBER = "01884268524";
const PIN = "6576";

function authenticate() {
  const userNum = document.getElementById("userNumber");
  const userPin = document.getElementById("userPin");

  if (userNum.value === MOBILE_NUMBER && userPin.value === PIN) {
    window.alert("Login Successful");
    window.location.href = "../pages/home.html";
  } else {
    window.alert("Invalid Number Or PIN");
  }
}

document.getElementById("btn-login").addEventListener("click", authenticate);
