function myMap() {
	var myCenter = new google.maps.LatLng(63.4308745,10.399866);
	var mapCanvas = document.getElementById("googlemaps");
	var mapOptions = {center: myCenter, zoom: 13,disableDefaultUI: true};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
	marker.setMap(map);
};