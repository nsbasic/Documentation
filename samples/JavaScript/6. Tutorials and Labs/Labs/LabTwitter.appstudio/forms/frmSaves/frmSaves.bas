Dim saves

Function frmSaves_onshow()
  c = lstSaves.getItemCount() - 1
  For i = 1 To c
    lstSaves.deleteItem()
  Next
  
  sqlList = "SELECT * from weatherSaves"
  Sql(DB, [[sqlList, dataHandler]])
End Function

Function lstSaves_onclick(i)
  If TypeName(i)="object" Then Exit Function
  lblSavedTempValue.textContent = saves[i - 1].temp
  lblSavedHumidityValue.textContent = saves[i - 1].humidity
  lblSavedPressureValue.textContent = saves[i - 1].pressure
  lblSavedWindSpeedValue.textContent = saves[i - 1].windSpeed
  lblSavedWindDirValue.textContent = saves[i - 1].windDir
  lblSavedCloudinessValue.textContent = saves[i - 1].cloudiness
  lblDateTimeValue.textContent = saves[i - 1].date
  
  ChangeForm(frmSavedData)
End Function

Sub dataHandler(transaction, results)
  saves = []
  For i = 0 To results.rows.length - 1
    saves.push(results.rows.item(i))
  Next
  
  For i = 0 To saves.length - 1
    lstSaves.addItem(saves[i].date)
  Next
End Sub
