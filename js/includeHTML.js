function setNavbar() {
  navbar = document.getElementById("placeholder-navbar");
  navbar.id = "nav_bar"
  navbar.innerHTML = `
      <a href="frontpage.html"><img id="logo_element" src="img/logo.png" alt="logo"></a>
      <button onclick="location.href='frontpage.html';" id="home_input" type="button" >Home</button>
      <button onclick="location.href='courses_overview.html';" id="courses_input" type="button" >Courses</button>
      <button onclick="location.href='help.html';" id="faq_input" type="button" >FAQ/Help</button>
      <button onclick="location.href='about.html';" id="About_input" type="button" >About us</button>
      <button onclick="location.href='login.html';" id="Login_input" type="button" >Login</button>`
};

function setFooter() {
  footer = document.getElementById("placeholder-footer");
  footer.id = "footer"
  footer.innerHTML = `
      ADD FOOTER CODE HERE
`
};
