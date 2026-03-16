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
  
  For i = 1 To lstSaves.getItemCount()
    lstSaves.deleteItem()
  Next
  
  For i = 1 To 5
    lstSaves.addItem("Item " & i)
  Next i
End Sub

Function btnSave_onclick()
  MsgBox "Not yet implemented!"
End Function

Function btnLoad_onclick()
  Dim city = encodeURIComponent(txtCity.value)
  Dim appid = "2de143494c0b295cca9337e1e96b00e0"
  GetJSON("http://api.openweathermap.org/data/2.5/weather","q=" & city & "&appid=" & appid, weatherData)
End Function

Sub weatherData(data)
  lblPressureValue.textContent = data.main.pressure
  lblTempValue.textContent = FormatNumber(data.main.temp - 273.15,1)
  lblWindDirValue.textContent = data.wind.deg
  lblWindSpeedValue.textContent = data.wind.speed
  lblCloudinessValue.textContent = data.main.humidity
  lblHumidityValue.textContent = data.clouds.all
  imgIcon.firstChild.src = "http://openweathermap.org/img/w/" & data.weather[0].icon & ".png"
End Sub
