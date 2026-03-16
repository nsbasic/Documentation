'For more documentation on the options, see
'https://developers.google.com/maps/documentation/javascript/reference?csw=1
Dim marker
Dim infowindow

Function btnLocation_onclick()
  navigator.geolocation.getCurrentPosition(gotLocation, declined)
  WaitCursor True
End Function

Function gotLocation(location)
  GoogleMap1.mapOptions.latitude = location.coords.latitude
  GoogleMap1.mapOptions.longitude = location.coords.longitude
  GoogleMap1.refresh()
  
  'Put a marker on our location
  point = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
  marker = GoogleMap1.setMarker({position: point})
  'Add an infoWindow to our marker
  infowindow = GoogleMap1.setInfoWindow("Lat: " & location.coords.latitude & " Lng: " & location.coords.longitude, marker)
  WaitCursor False
End Function

Function btnHideMarker_onclick()
  If typeof(marker) <> "object" Then Exit Function
  infowindow = undefined;
  marker.setMap(null);
  GoogleMap1.refresh();
End Function

Function btnShowTraffic_onclick()
  GoogleMap1.trafficLayer = new google.maps.TrafficLayer()
  GoogleMap1.trafficLayer.setMap(GoogleMap1.map)
End Function

Function btnHideTraffic_onclick()
  If GoogleMap1.trafficLayer = undefined Then Exit Function
  GoogleMap1.trafficLayer.setMap(null)
End Function

Function declined(error)
  MsgBox "Error: " & error.message
End If

