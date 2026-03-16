Dim DB
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
  
  DB = SqlOpenDatabase("weather.db","1.0","My Weather Database")
  sqlList = "CREATE TABLE IF NOT EXISTS weatherSaves (temp, pressure, windDir, windSpeed, cloudiness, humidity, date)"
  Sql(DB, [sqlList])
End Sub

Function btnSave_onclick()
  sqlList = "INSERT INTO weatherSaves (temp, pressure, windDir, windSpeed, cloudiness, humidity, date) VALUES (?,?,?,?,?,?,?)"
  args = [lblTempValue.textContent]
  args[1] = lblPressureValue.textContent
  args[2] = lblWindDirValue.textContent
  args[3] = lblWindSpeedValue.textContent
  args[4] = lblCloudinessValue.textContent
  args[5] = lblHumidityValue.textContent
  args[6] = Now
  Sql(DB, [[sqlList, args, sqlSuccess]])
End Function

Sub sqlSuccess()
  MsgBox "Saved!"
End Sub

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
  'sensitivity 2
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

