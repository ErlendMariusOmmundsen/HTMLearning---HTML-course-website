function showLogin() {
  var username = document.getElementById("username");
  var loginbox = document.getElementById("loginbox");
  var signupbox = document.getElementById("signupbox");
  signupbox.style.display = "none";
  loginbox.style.display = "block";
  username.focus();
}

function showSignup() {
  var loginbox = document.getElementById("loginbox");
  var signupbox = document.getElementById("signupbox");
  loginbox.style.display = "none";
  signupbox.style.display = "block";
  var firstname = document.getElementById("firstname");
  firstname.focus();
}

function validateLogin() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (username.checkValidity() && password.checkValidity()) {
    alert("Successful login.");
  } else {
    alert("Email or password are not correct.");
  }
}
function validateSignup() {
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var usernamesignup = document.getElementById("usernamesignup");
  var passwordsignup = document.getElementById("passwordsignup");
  var passwordconf = document.getElementById("passwordconf");
  if (
    firstname.checkValidity() &&
    lastname.checkValidity() &&
    usernamesignup.checkValidity() &&
    passwordsignup.checkValidity() &&
    passwordconf.checkValidity()
  ) {
    if (passwordsignup.value === passwordconf.value) {
      alert("You are now registered.");
    } else {
      alert("The passwords entered do not match.");
    }
  } else {
    alert("The details entered are not correct, please check them again.");
  }
}
