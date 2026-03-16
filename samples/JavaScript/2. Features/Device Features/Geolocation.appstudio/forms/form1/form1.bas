'Geolocation - this sample gets the current location.
'It also shows the current speed and altitude.

'Set up global variables
Dim gps

Sub Main()
  longitude = -79.20989561
  latitude = 43.73768353
  btnStop.disabled=True
  lastRefresh=0
End Sub

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
  s = s & "Speed: " + location.coords.speed & " " & vbCRLF
  s = s & "Altitude: " + location.coords.altitude & vbCRLF
  s = s & "Accuracy: " + location.coords.accuracy & " " & vbCRLF
  s = s & "Accuracy(altitude): " + location.coords.altitudeAccuracy & " " & vbCRLF
  'different browsers return the timestamp in different formats.
  'this converts it if necessary.
  If IsNumeric(location.timestamp) Then
    gpsDate=new Date(location.timestamp)
  Else
    gpsDate=location.timestamp
  End If
  TextArea1.value = s & "Timestamp: " + gpsDate
End Function

Function errorCallBack(Error)
  'unable to get the geolocation data
  MsgBox Error.message
End Function

