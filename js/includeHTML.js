function setNavbar() {
    navbar = document.getElementById("placeholder-navbar");
    navbar.id = "nav_bar";
    let folder_up = '';
    if (typeof inside_folder !== 'undefined') {
        folder_up = '../';
    };
    let navbar_html = `
      <a href="` + folder_up + `index.html"><img id="logo_element" src="` + folder_up + `img/logo.png" alt="logo"></a>
      <button onclick="location.href='` + folder_up + `index.html#nav_bar';" id="home_input" type="button" >Home</button>
      <button onclick="location.href='` + folder_up + `courses_overview.html';" id="courses_input" type="button" >Courses</button>
      <button onclick="location.href='` + folder_up + `help.html';" id="faq_input" type="button" >FAQ/Help</button>
      <button onclick="location.href='` + folder_up + `about.html';" id="About_input" type="button" >About us</button>
      <button onclick="location.href='` + folder_up + `login.html';" id="Login_input" type="button" >Login</button>`;
    navbar.innerHTML = navbar_html;
};

function setHamburger(){
    hamburger = document.getElementById("placeholder-hamburger");
    hamburger.id = "menuToggle";
    let folder_up = '';
    if (typeof inside_folder !== 'undefined') {
        folder_up = '../';
    };
    let hamburger_html = `
        <input type="checkbox" />

        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>

        <ul id="menu">
          <a href="` + folder_up + `index.html"><li>Home</li></a>
          <a href="` + folder_up + `courses_overview.html"><li>Courses</li></a>
          <a href="` + folder_up + `help.html"><li>FAQ/Help</li></a>
          <a href="` + folder_up + `about.html"><li>About us</li></a>
          <a href="` + folder_up + `login.html"><li>Login</li></a>
        </ul>`;
    hamburger.innerHTML = hamburger_html;
}

function setFooter() {
    footer = document.getElementById("placeholder-footer");
    footer.id = "footer"
    let folder_up = '';
    if (typeof inside_folder !== 'undefined') {
        folder_up = '../';
    };
    let footer_html = 
	`<div id="footercontainer">
	<div id="info">
		<h1 style="color:#def2f1;font-family:muli,serif;"> About the company </h1>
		<p style="color:grey;">
			Lorem ipsum dolor sit amet, consectateur adispcing elit. Fusce euismod 
			conballis velit, eu auctor lacus vehicula sit amet.
		</p>
	</div>
	<p style="position:absolute; bottom:1px;color:grey;font-size:10px;">Created by IT2805 Webteknologi group 1 </p>
	<div id="links">
		<div class="grid-container">
		<div class="item1"><img class="icon" src="` + folder_up + `img/Mailicon.png" alt="E-mail:"/>
		<a href="mailto:help@htmlearning.com?Subject=HTMLearning" target="_top">help@htmlearning.com</a></div>
		<div class="item2"><img class="icon" src="` + folder_up + `img/phoneicon.png" alt="Phone:"/>
		<a href="tel:+4700000000">+47 000 00 000 </a></div>
		<div class="item3">
		<img class="icon" src="` + folder_up + `img/positionicon.png" alt="Pos:"/>
		<a href="https://www.google.com/maps/place/Sondre+gate+4,+7011+Trondheim">
			Søndre gate 4, Trondheim</a>
			</div>
		</div>
	</div>
	<div id="map">
		<div id="googlemaps" style="width:320px;height:200px;" >Map to location</div>
	</div>
	</div>
<script src="js/maps.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB7pwvKLN2edHaPFjixmfxDwBHb3rfzeI&amp;callback=myMap"></script>
`;
    footer.innerHTML = footer_html;
};

function setHamburger(){
	burger = document.getElementById("placeholder-hamburger");
	burger.id = "hamburger";
	let burger_html = `Insert HTML for burger here
	`
	burger.innerHTML = burger_html;
	
}

function setAll() {
    setNavbar();
    setHamburger();
    setFooter();
}
