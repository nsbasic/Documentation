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
