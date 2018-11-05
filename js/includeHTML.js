function setNavbar() {
    navbar = document.getElementById("placeholder-navbar");
    navbar.id = "nav_bar";
    let folder_up = '';
    if (typeof inside_folder !== 'undefined') {
        folder_up = '../';
    };
    let navbar_html = `
      <a href="` + folder_up + `frontpage.html"><img id="logo_element" src="` + folder_up + `img/logo.png" alt="logo"></a>
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
    let folder_up = '';
    if (typeof inside_folder !== 'undefined') {
        folder_up = '../';
    };
    let footer_html = `
<div id="info">
	<h1 style="color:#def2f1;font-family:muli,serif;"> About the company </h1>
	<p style="color:grey;">
		Lorem ipsum dolor sit amet, consectateur adispcing elit. Fusce euismod 
		conballis velit, eu auctor lacus vehicula sit amet.
	</p>
</div>
<div id="links">
	<div class="grid-container">
	<div class="item1"><img class="icon" src="` + folder_up + `img/Mailicon.png" alt="E-mail:"/></div>
	<div class="item2"><a href="mailto:help@htmlearning.com?Subject=HTMLearning" target="_top">help@htmlearning.com</a></div>
	<div class="item3"><img class="icon" src="` + folder_up + `img/phoneicon.png" alt="Phone:"/></div>
	<div class="item4"><a href="tel:+4700000000">+47 000 00 000 </a></div>
	<div class="item5"><img class="icon" src="` + folder_up + `img/positionicon.png" alt="Pos:"/></div>
	<div class="item6"><a href="https://www.google.com/maps/place/Sondre+gate+4,+7011+Trondheim">
		Søndre gate 4, Trondheim</a></div>
	</div>
</div>
<div id="map">
	<div id="googlemaps" style="width:320px;height:200px;" >Map to location</div>
	
	</div>

<script src="js/maps.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDB7pwvKLN2edHaPFjixmfxDwBHb3rfzeI&amp;callback=myMap"></script>
</div>
<p style="color:grey;font-size: 10px;">Created by IT2805 Webteknologi group 1 </p>
`;
    footer.innerHTML = footer_html;
};

function setAll() {
    setNavbar();
    setFooter();
}
