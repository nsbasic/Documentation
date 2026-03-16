 //For more documentation on the options, see
 //https://developers.google.com/maps/documentation/javascript/reference?csw=1
var marker;
var infowindow;

btnLocation.onclick = function() {
  navigator.geolocation.getCurrentPosition(gotLocation, declined);
  NSB.WaitCursor(true);
};

function gotLocation(location) {
  GoogleMap1.mapOptions.latitude = location.coords.latitude;
  GoogleMap1.mapOptions.longitude = location.coords.longitude;
  GoogleMap1.refresh();

 //Put a marker on our location
  point = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
  marker = GoogleMap1.setMarker({position: point});
 //Add an infoWindow to our marker
  infowindow = GoogleMap1.setInfoWindow("Lat: "  +  location.coords.latitude  +  " Lng: "  +  location.coords.longitude, marker);
  NSB.WaitCursor(false);
}

btnHideMarker.onclick = function() {
  if(typeof(marker) != "object" )  { return; };
  infowindow = undefined;
  marker.setMap(null);
  GoogleMap1.refresh();
};

btnShowTraffic.onclick = function() {
  GoogleMap1.trafficLayer = new google.maps.TrafficLayer();
  GoogleMap1.trafficLayer.setMap(GoogleMap1.map);
};

btnHideTraffic.onclick = function() {
  if(GoogleMap1.trafficLayer == undefined )  { return; };
  GoogleMap1.trafficLayer.setMap(null);
};

function declined(error) {
  NSB.MsgBox("Error: "  +  error.message);
}

