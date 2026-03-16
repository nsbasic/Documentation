ax = 0
lat = 0
lon = 0

Sub Main()
  lblPressureValue.textContent = ""
  lblTempValue.textContent = ""
  lblWindDirValue.textContent = ""
  lblWindSpeedValue.textContent = ""
  lblCloudinessValue.textContent = ""
  lblHumidityValue.textContent = ""
  
  lblSavedPressureValue.textContent = ""
  lblSavedTempValue.textContent = ""
  lblSavedWindDirValue.textContent = ""
  lblSavedWindSpeedValue.textContent = ""
  lblSavedCloudinessValue.textContent = ""
  lblSavedHumidityValue.textContent = ""
  lblDateTimeValue.textContent = ""
  
  If Not localStorage.weatherSaves Then
    localStorage.weatherSaves = JSON.stringify([])
  End If
End Sub

Function btnSave_onclick()
  data = {}
  data.temp = lblTempValue.textContent
  data.pressure = lblPressureValue.textContent
  data.windDir = lblWindDirValue.textContent
  data.humidity = lblHumidityValue.textContent
  data.windSpeed = lblWindSpeedValue.textContent
  data.cloudiness = lblCloudinessValue.textContent
  data.date = Now
  
  saves = JSON.parse(localStorage.weatherSaves)
  saves.push(data)

  localStorage.weatherSaves = JSON.stringify(saves)
  
  MsgBox "Saved!"
End Function

Function btnLoad_onclick()
 Dim appid = "2de143494c0b295cca9337e1e96b00e0" 
  If flpCurrentLocation.value() = "Off" Then
    Dim city = encodeURIComponent(txtCity.value)
    GetJSON("http://api.openweathermap.org/data/2.5/weather","q=" & city & "&appid=" & appid, weatherData)
  Else
    GetJSON("http://api.openweathermap.org/data/2.5/weather","lat=" & lat & "&lon=" & lon & "&appid=" & appid, weatherData)
  End If

  selEmoji.setIndex(0)
  pb = pbPhoto.getContext("2d")
  pb.clearRect(0, 0, 1000, 1000)
End Function

Sub weatherData(data)
  lblPressureValue.textContent = data.main.pressure
  lblTempValue.textContent = FormatNumber(data.main.temp - 273.15,1)
  lblWindDirValue.textContent = data.wind.deg
  lblWindSpeedValue.textContent = data.wind.speed
  lblCloudinessValue.textContent = data.main.humidity
  lblHumidityValue.textContent = data.clouds.all
End Sub

Sub window_ondevicemotion(event)
  'sensivity 2
  If ax - event.accelerationIncludingGravity.x > 2 Then
    'shake
     GetJSON("http://api.openweathermap.org/data/2.5/weather","lat=" & ((Rnd * 180) - 90) & "&lon=" & ((Rnd * 360) - 180),weatherData)
  End If
  ax = event.accelerationIncludingGravity.x;
End Sub

Function flpCurrentLocation_onchange()
  If flpCurrentLocation.value() = "On" Then
    txtCity.disabled = True
    btnLoad.disabled = True
  Else
    txtCity.disabled = False
    btnLoad.disabled = False
  End If
  
  navigator.geolocation.getCurrentPosition(positionData)
End Function

Sub positionData(pos)
  lat = pos.coords.latitude
  lon = pos.coords.longitude
  btnLoad.disabled = False
End Sub

