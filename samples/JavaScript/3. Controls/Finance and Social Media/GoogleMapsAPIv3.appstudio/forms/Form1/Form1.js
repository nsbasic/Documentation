 //Google Maps API documentation is here:
 //https://developers.google.com/maps/documentation/javascript/examples/map-simple

var map,trafficLayer;
function Main() {
  drawMap();
}

function drawMap() {
  mapOptions = {zoom: 8,  center: new google.maps.LatLng(34.04924594193164, -118.24104309082031), mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(Container1, mapOptions);

}

Button1.onclick = function() {
  trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
};

Button2.onclick = function() {
  if(trafficLayer == undefined )  { return; };
  trafficLayer.setMap(null);
};
