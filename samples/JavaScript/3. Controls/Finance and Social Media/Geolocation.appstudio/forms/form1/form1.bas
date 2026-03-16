'Geolocation - this sample gets the current location
'and displays a map of it. It also shows the current
'speed and altitude.

'Set up global variables
Dim gps
longitude = -79.20989561
latitude = 43.73768353
lastRefresh=0

Function btnStart_onclick()
  'This starts scanning the current location. It checks it every 5 seconds.
  'If it gets the data successfully, the handler function is called.
  'If not, errorCallBack is called.
  options={timeout: 5000, maximumAge: 5000, enableHighAccuracy: True}
  gps=navigator.geolocation.watchPosition(onGeolocation, errorCallBack, options)
  
  'disable the stop button, enable the start button
  btnStart.disabled=True
  btnStop.disabled=False
End Function

Function btnStop_onclick()
  'Stop checking the current location
  navigator.geolocation.clearWatch(gps)
  btnStart.disabled=False
  btnStop.disabled=True
End Function

Function onGeolocation(location)
  Dim s
  s = "Longitude: " + location.coords.longitude & vbCRLF
  s = s & "Latitude: " + location.coords.latitude & vbCRLF
  s = s & "Speed: " + location.coords.speed & " " 
  s = s & "Altitude: " + location.coords.altitude & vbCRLF
  s = s & "Accuracy: " + location.coords.accuracy & " "
  s = s & "Accuracy(altitude): " + location.coords.altitudeAccuracy & " " & vbCRLF
  'different browsers return the timestamp in different formats.
  'this converts it if necessary.
  If IsNumeric(location.timestamp) Then
    gpsDate=new Date(location.timestamp)
  Else
    gpsDate=location.timestamp
  End If
  TextArea1.value = s & "Timestamp: " + gpsDate
  ShowMap(location.coords.latitude, location.coords.longitude)
End Function

Function errorCallBack(Error)
  'unable to get the geolocation data
  MsgBox Error.message & vbCRLF & "Show default map..."
  ShowMap(latitude, longitude)
End Function

Function ShowMap(latitude, longitude)
  'This function displays a Google map.
  'only update the map every 10 seconds.
  'For information on the Google Static Maps API, go here:
  'http://code.google.com/apis/maps/documentation/staticmaps/
  If SysInfo(10)-lastRefresh<10000 Then Exit Function
  lastRefresh=SysInfo(10)
  s = "'https://maps.google.com/maps/api/staticmap?center=" & _
  latitude & "," & longitude & _
  "&zoom=14&size=300x200&maptype=roadmap&sensor=true&output=embed'"
  Map1.innerHTML="<img width=300 height=200 src=" & s  & "></img>"
  console.log(s)
End Function

