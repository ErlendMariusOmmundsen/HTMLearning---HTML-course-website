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
