 //Geolocation - this sample gets the current location
 //and displays a map of it. It also shows the current
 //speed and altitude.

 //Set up global variables
var gps;
longitude = -79.20989561;
latitude = 43.73768353;
lastRefresh=0;

btnStart.onclick = function() {
 //This starts scanning the current location. It checks it every 5 seconds.
 //If it gets the data successfully, the handler function is called.
 //If not, errorCallBack is called.
  options={timeout: 5000, maximumAge: 5000, enableHighAccuracy: true};
  gps=navigator.geolocation.watchPosition(onGeolocation, errorCallBack, options);

 //disable the stop button, enable the start button
  btnStart.disabled=true;
  btnStop.disabled=false;
};

btnStop.onclick = function() {
 //Stop checking the current location
  navigator.geolocation.clearWatch(gps);
  btnStart.disabled=false;
  btnStop.disabled=true;
};

function onGeolocation(location) {
 var s;
  s = "Longitude: " + location.coords.longitude  +  '\n';
  s = s  +  "Latitude: " + location.coords.latitude  +  '\n';
  s = s  +  "Speed: " + location.coords.speed  +  " ";
  s = s  +  "Altitude: " + location.coords.altitude  +  '\n';
  s = s  +  "Accuracy: " + location.coords.accuracy  +  " ";
  s = s  +  "Accuracy(altitude): " + location.coords.altitudeAccuracy  +  " "  +  '\n';
 //different browsers return the timestamp in different formats.
 //this converts it if necessary.
  if(IsNumeric(location.timestamp)) {
    gpsDate=new Date(location.timestamp);
 } else {
    gpsDate=location.timestamp;
  }
  TextArea1.value = s  +  "Timestamp: " + gpsDate;
  ShowMap(location.coords.latitude, location.coords.longitude);
}

function errorCallBack(Error) {
 //unable to get the geolocation data
  NSB.MsgBox(Error.message  +  '\n'  +  "Show default map...");
  ShowMap(latitude, longitude);
}

function ShowMap(latitude, longitude) {
 //This function displays a Google map.
 //only update the map every 10 seconds.
 //For information on the Google Static Maps API, go here:
 //http://code.google.com/apis/maps/documentation/staticmaps/
  if(SysInfo(10)-lastRefresh<10000 )  { return; }
  lastRefresh=SysInfo(10);
  s = "'https://maps.google.com/maps/api/staticmap?center="  +   latitude  +  ","  +  longitude  +   "&zoom=14&size=300x200&maptype=roadmap&sensor=true&output=embed'";
  Map1.innerHTML="<img width=300 height=200 src="  +  s   +  "></img>";
  console.log(s);
}

