function showLogin() {
  var loginbox = document.getElementById("loginbox");
  var signupbox = document.getElementById("signupbox");
  signupbox.style.display = "none";
  loginbox.style.display = "block";
}

function showSignup() {
  var loginbox = document.getElementById("loginbox");
  var signupbox = document.getElementById("signupbox");
  loginbox.style.display = "none";
  signupbox.style.display = "block";
}

function validateLogin() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if (username.checkValidity() && password.checkValidity()){
    alert("Successful login.");
  } else {
    alert("Email or password are not correct.");
  }
}
