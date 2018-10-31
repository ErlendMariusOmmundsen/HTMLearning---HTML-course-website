function setNavbar() {
    navbar = document.getElementById("placeholder-navbar");
    navbar.id = "nav_bar";
    let folder_up = '';
    if (typeof inside_folder !== 'undefined') {
        folder_up = '../';
    };
    let navbar_html = `
      <a href="frontpage.html"><img id="logo_element" src="` + folder_up + `img/logo.png" alt="logo"></a>
      <button onclick="location.href='` + folder_up + `frontpage.html';" id="home_input" type="button" >Home</button>
      <button onclick="location.href='` + folder_up + `courses_overview.html';" id="courses_input" type="button" >Courses</button>
      <button onclick="location.href='` + folder_up + `help.html';" id="faq_input" type="button" >FAQ/Help</button>
      <button onclick="location.href='` + folder_up + `about.html';" id="About_input" type="button" >About us</button>
      <button onclick="location.href='` + folder_up + `login.html';" id="Login_input" type="button" >Login</button>`;
    navbar.innerHTML = navbar_html;
};

function setFooter() {
  footer = document.getElementById("placeholder-footer");
  footer.id = "footer"
  footer.innerHTML = `
      ADD FOOTER CODE HERE
`
};
