'Google Maps API documentation is here:
'https://developers.google.com/maps/documentation/javascript/examples/map-simple

Dim map, trafficLayer
Sub Main()
  drawMap()
End Sub

Function drawMap()
  mapOptions = {zoom: 8, _
    center: new google.maps.LatLng(34.04924594193164, -118.24104309082031),_
    mapTypeId: google.maps.MapTypeId.ROADMAP}
  map = new google.maps.Map(Container1, mapOptions)
  
End Function

Function Button1_onclick()
  trafficLayer = new google.maps.TrafficLayer()
  trafficLayer.setMap(map)
End Function

Function Button2_onclick()
  If trafficLayer = undefined Then Exit Function
  trafficLayer.setMap(null)  
End Function
