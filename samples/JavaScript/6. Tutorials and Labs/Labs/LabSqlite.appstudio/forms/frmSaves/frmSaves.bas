
Function frmSaves_onshow()
  c = lstSaves.getItemCount() - 1
  For i = 1 To c
    lstSaves.deleteItem()
  Next
  
  saves = JSON.parse(localStorage.weatherSaves)
  For i = 0 To saves.length - 1
    lstSaves.addItem(saves[i].date)
  Next
End Function

Function lstSaves_onclick(i)
  If TypeName(i)="object" Then Exit Function
  saves = JSON.parse(localStorage.weatherSaves)
  lblSavedTempValue.textContent = saves[i - 1].temp
  lblSavedHumidityValue.textContent = saves[i - 1].humidity
  lblSavedPressureValue.textContent = saves[i - 1].pressure
  lblSavedWindSpeedValue.textContent = saves[i - 1].windSpeed
  lblSavedWindDirValue.textContent = saves[i - 1].windDir
  lblSavedCloudinessValue.textContent = saves[i - 1].cloudiness
  lblDateTimeValue.textContent = saves[i - 1].date
  
  ChangeForm(frmSavedData)
End Function
