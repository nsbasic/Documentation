 //Contributed by Adrian Nicolaiev

 // NSBasic Container Example using <a href="http://leafletjs.com/">Leaflet</a> Map
 // Magic goes here: NSBasic DIV Container becomes Leaflet DIV map
mapNSB = L.map(mapContainer);

ShowMapJavascriptButton1.onclick = function() {
mapNSB.setView([-15.799473,-47.864167], 13);
    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapNSB);
    // add a marker in the given location, attach some popup content to it and open the popup
    L.marker([-15.799473,-47.864167]).addTo(mapNSB)
      .bindPopup('My city :-)')
      .openPopup();  
};

ShowMapBasicButton2.onclick = function() {
 //Try to find your location
  mapNSB.locate({setView: true});
 //If found, fires onLocationFound function
  mapNSB.on("locationfound" , onLocationFound);
 //add an OpenStreetMap tile layer
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png" , { attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors" }).addTo(mapNSB);
};

function onLocationFound(e) {
 //add a marker in the given location, attach some popup content To it And open the popup
  L.marker(e.latlng).addTo(mapNSB) .bindPopup("Your city :-)") .openPopup();
}